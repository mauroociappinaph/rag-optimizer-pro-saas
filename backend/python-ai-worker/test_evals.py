import asyncio
import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from evaluator_engine import AgentEvaluator

async def run_eval_tests():
    """
    Tests the Agent Evaluation engine with mock data.
    """
    evaluator = AgentEvaluator()
    
    query = "¿Cuál es el ROI proyectado?"
    context = "El sistema genera un ahorro del 60% en costos de LLM mediante caching semántico."
    response = "El ROI proyectado es del 60% gracias al ahorro en costos de LLM."

    print("--- ⚖️ Behavioral Test: Agent Evaluation ---")
    
    results = await evaluator.evaluate_response(
        query=query,
        context=context,
        response=response
    )
    
    if "metrics" in results:
        print(f"📊 Faithfulness Score: {results['metrics']['faithfulness']}")
        print(f"📊 Relevance Score: {results['metrics']['relevance']}")
        print(f"📊 Overall: {results['metrics']['overall_score']}")
        print(f"✅ STATUS: {results['status']}")
    else:
        print(f"❌ FAIL: Evaluation failed with error: {results.get('error')}")

if __name__ == "__main__":
    asyncio.run(run_eval_tests())