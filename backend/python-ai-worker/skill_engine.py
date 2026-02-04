import os
import logging
from typing import Optional, Dict, Any
from langchain_openai import ChatOpenAI
from langchain_ollama import ChatOllama
from langchain_core.messages import SystemMessage, HumanMessage
from dotenv import load_dotenv
from token_accountant import accountant
from evaluator_engine import evaluator

load_dotenv()

logger = logging.getLogger("uvicorn")
GLOBAL_SKILLS_PATH = "/Users/mauroociappina/.gemini/antigravity/global_skills"

class SkillExecutor:
    """
    Sovereign Skill Executor (Unified Engine):
    Centralizes instruction loading and LLM execution for all global skills.
    """
    def __init__(self, model_name: str = "gpt-4o"):
        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            logger.error("OPENAI_API_KEY is missing. Skill execution will fail.")
        self.llm = ChatOpenAI(model=model_name, temperature=0.1)
        # Sovereign Repair Engine (Ollama)
        self.repair_llm = ChatOllama(model="llama3.1:8b", temperature=0.0)

    def _load_skill_instructions(self, skill_id: str) -> Optional[str]:
        """Loads and parses SKILL.md from the global repository."""
        skill_file = os.path.join(GLOBAL_SKILLS_PATH, skill_id, "SKILL.md")
        if not os.path.exists(skill_file):
            logger.error(f"Skill '{skill_id}' logic not found at {skill_file}")
            return None
        try:
            with open(skill_file, 'r') as f:
                content = f.read()
                # Unified parsing for standard YAML frontmatter
                if content.startswith('---'):
                    parts = content.split('---', 2)
                    if len(parts) >= 3:
                        return parts[2].strip()
                return content.strip()
        except Exception as e:
            logger.error(f"Corruption detected in skill {skill_id}: {str(e)}")
            return None

    async def execute(self, skill_id: str, human_input: str) -> Dict[str, Any]:
        """Executes a skill against provided input with high-fidelity validation."""
        instructions = self._load_skill_instructions(skill_id)
        if not instructions:
            return {"error": f"Skill '{skill_id}' uninitialized or locked.", "status": "failed"}

        logger.info(f"[[SOVEREIGN_SKILL]] Activating engine for: {skill_id}")
        try:
            messages = [SystemMessage(content=instructions), HumanMessage(content=human_input)]
            response = await self.llm.ainvoke(messages)

            # Audit usage
            token_usage = response.response_metadata.get("token_usage", {})
            input_tokens = token_usage.get("prompt_tokens", 0)
            output_tokens = token_usage.get("completion_tokens", 0)

            cost = accountant.calculate_cost(self.llm.model_name, input_tokens, output_tokens)

            # Agent Evaluation (Quality Gate)
            evaluation = await evaluator.evaluate_response(
                context=instructions,
                query=human_input,
                response=response.content
            )

            logger.info(f"[[FINOPS_AUDIT]] Skill {skill_id} cost: ${cost} | Quality Score: {evaluation.get('score')}")

            # --- AUTO-HEALING PILOT (Industrial 2026) ---
            if evaluation.get("score", 1.0) < 0.7:
                logger.warning(f"[[AUTO_HEALING]] Low quality detected ({evaluation.get('score')}). Attempting sovereign repair for {skill_id}...")

                repair_prompt = f"""
                TU RESPUESTA ANTERIOR FUE CALIFICADA COMO DEFICIENTE.
                REVISA EL CONTEXTO Y CORRIGE LOS ERRORES O ALUCINACIONES.

                CONTEXTO: {instructions}
                PREGUNTA: {human_input}
                RESPUESTA PREVIA: {response.content}
                MOTIVO DE FALLO: {evaluation.get('justification')}

                GENERA UNA NUEVA RESPUESTA 100% FIEL AL CONTEXTO.
                """

                messages = [SystemMessage(content="Eres un motor de auto-corrección de alta fidelidad."), HumanMessage(content=repair_prompt)]
                repair_response = await self.repair_llm.ainvoke(messages)

                # Re-evaluate repaired response
                new_evaluation = await evaluator.evaluate_response(
                    context=instructions,
                    question=human_input,
                    response=repair_response.content
                )

                logger.info(f"[[AUTO_HEALING]] Repair complete. New Score: {new_evaluation.get('score')}")

                return {
                    "skill_id": skill_id,
                    "output": repair_response.content,
                    "status": "success",
                    "healed": True,
                    "original_score": evaluation.get("score"),
                    "usage": {
                        "input_tokens": input_tokens,
                        "output_tokens": output_tokens,
                        "real_cost": cost # Re-tries on Ollama are free
                    },
                    "evaluation": new_evaluation
                }

            return {
                "skill_id": skill_id,
                "output": response.content,
                "status": "success",
                "healed": False,
                "usage": {
                    "input_tokens": input_tokens,
                    "output_tokens": output_tokens,
                    "real_cost": cost
                },
                "evaluation": evaluation
            }
        except Exception as e:
            logger.error(f"Skill engine failure ({skill_id}): {str(e)}")
            return {"error": str(e), "status": "failed"}

# Export single singleton instance to prevent multiple LLM initializations
skill_executor_instance = SkillExecutor()
