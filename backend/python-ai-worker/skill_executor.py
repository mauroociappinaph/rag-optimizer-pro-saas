import os
import yaml
import logging
from typing import Optional, Dict, Any
from langchain_openai import ChatOpenAI
from langchain_core.messages import SystemMessage, HumanMessage

logger = logging.getLogger("uvicorn")

GLOBAL_SKILLS_PATH = "/Users/mauroociappina/.gemini/antigravity/global_skills"

class SkillExecutor:
    """
    Sovereign Skill Executor: Loads instructions from the global skills repo
    and executes them using high-fidelity LLM configurations.
    """

    def __init__(self, model_name: str = "gpt-4o"):
        self.llm = ChatOpenAI(model=model_name, temperature=0.1)

    def _load_skill_instructions(self, skill_id: str) -> Optional[str]:
        """Loads the content of SKILL.md for a given skill_id."""
        skill_file = os.path.join(GLOBAL_SKILLS_PATH, skill_id, "SKILL.md")

        if not os.path.exists(skill_file):
            logger.error(f"Skill '{skill_id}' not found at {skill_file}")
            return None

        try:
            with open(skill_file, 'r') as f:
                content = f.read()
                # Skills often have YAML frontmatter; we extract the markdown part
                if content.startswith('---'):
                    parts = content.split('---', 2)
                    if len(parts) >= 3:
                        return parts[2].strip()
                return content.strip()
        except Exception as e:
            logger.error(f"Error loading skill {skill_id}: {str(e)}")
            return None

    async def execute(self, skill_id: str, human_input: str) -> Dict[str, Any]:
        """
        Executes a specific skill against the provided input.
        """
        instructions = self._load_skill_instructions(skill_id)

        if not instructions:
            return {"error": f"Skill '{skill_id}' could not be loaded or does not exist."}

        logger.info(f"[[SKILL_ACTIVATION]] Executing {skill_id}")

        try:
            messages = [
                SystemMessage(content=instructions),
                HumanMessage(content=human_input)
            ]

            response = await self.llm.ainvoke(messages)

            return {
                "skill_id": skill_id,
                "output": response.content,
                "status": "success"
            }
        except Exception as e:
            logger.error(f"Error executing skill {skill_id}: {str(e)}")
            return {"error": str(e), "status": "failed"}

# Singleton instance
skill_executor = SkillExecutor()
