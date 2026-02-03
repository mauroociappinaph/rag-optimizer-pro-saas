import logging
import json
import os
from typing import Dict, Any, Optional
from langchain_ollama import ChatOllama
from langchain_core.messages import SystemMessage, HumanMessage
from security_utils import scrub_pii
from dotenv import load_dotenv

# Load environment just in case, though Ollama doesn't strictly need it for local use
ENV_PATH = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path=ENV_PATH)

logger = logging.getLogger("uvicorn")

class EvaluatorEngine:
    """
    Sovereign Agent Evaluator (Ollama Edition):
    Measures the truthfulness and relevance of RAG responses using local LLMs.
    """
    def __init__(self, model_name: str = "llama3.1:8b"):
        self.model_name = model_name
        self._llm: Optional[ChatOllama] = None

    @property
    def llm(self) -> ChatOllama:
        if self._llm is None:
            logger.info(f"[[AGENT_EVAL]] Initializing Local Evaluator (Ollama: {self.model_name})")
            self._llm = ChatOllama(
                model=self.model_name,
                temperature=0.0,
                format="json" # Force JSON output if possible
            )
        return self._llm

    async def evaluate_response(self, context: str, question: str, response: str) -> Dict[str, Any]:
        """
        Evaluates a response against a context and a question.
        Returns a score (0.0 - 1.0) and a brief justification.
        """
        # Scrub inputs before sending to evaluator (Security First)
        safe_context = scrub_pii(context)
        safe_response = scrub_pii(response)

        eval_prompt = f"""
        Actúa como un Auditor de Calidad de RAG. Evalúa la siguiente respuesta basándote en el contexto proporcionado.

        CONTEXTO: {safe_context}
        PREGUNTA: {question}
        RESPUESTA: {safe_response}

        Debes devolver un JSON con dos campos:
        1. "score": Un número de 0.0 a 1.0 (donde 1.0 es perfecta fidelidad y relevancia).
        2. "justification": Una breve explicación de por qué diste esa nota.

        CRITERIOS:
        - Faithfulness: ¿La respuesta se basa ÚNICAMENTE en el contexto? (Si inventa datos, score bajo).
        - Relevance: ¿Responde directamente a la pregunta?
        """

        try:
            messages = [SystemMessage(content="Eres un experto en evaluación de RAG."), HumanMessage(content=eval_prompt)]
            result = await self.llm.ainvoke(messages)

            # Extract JSON from response
            content = result.content.strip()
            evaluation = json.loads(content)

            logger.info(f"[[AGENT_EVAL]] Score: {evaluation.get('score')} | Justificación: {evaluation.get('justification')}")
            return evaluation
        except Exception as e:
            logger.error(f"Evaluation engine failure (Ollama fallback): {str(e)}")
            return {"score": 0.5, "justification": "Error en el motor de evaluación local."}

# Singleton instance
evaluator = EvaluatorEngine()
