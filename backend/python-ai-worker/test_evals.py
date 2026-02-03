import asyncio
import os
from dotenv import load_dotenv
from evaluator_engine import evaluator

load_dotenv()

async def test_evals():
    print("--- INICIANDO TEST DE EVALUACIÓN (AGENT-EVAL) ---")

    context = "El RAG Optimizer Pro ahorra un 60% en costos de infraestructura mediante caché semántica."
    question = "¿Cuánto ahorra el sistema?"

    # Test 1: Respuesta Fiel
    response_good = "Ahorra un 60% gracias al uso de caché semántica."
    eval_good = await evaluator.evaluate_response(context, question, response_good)
    print(f"\nTEST 1 (Fiel): Score {eval_good['score']}")
    print(f"Justificación: {eval_good['justification']}")

    # Test 2: Alucinación
    response_bad = "Ahorra un 95% y regala pizzas los viernes."
    eval_bad = await evaluator.evaluate_response(context, question, response_bad)
    print(f"\nTEST 2 (Alucinación): Score {eval_bad['score']}")
    print(f"Justificación: {eval_bad['justification']}")

    if eval_good['score'] > 0.8 and eval_bad['score'] < 0.5:
        print("\n[SUCCESS] El motor de evaluación tiene discernimiento semántico.")
    else:
        print("\n[WARNING] El motor requiere ajuste de sensibilidad.")

if __name__ == "__main__":
    asyncio.run(test_evals())
