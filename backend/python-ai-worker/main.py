from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import os
import numpy as np
from redisvl.extensions.llmcache import SemanticCache
from redisvl.utils.vectorize import HFTextVectorizer
from dotenv import load_dotenv
from langchain_text_splitters import RecursiveCharacterTextSplitter
import logging
import json
from security_utils import PIIGuardFilter, scrub_pii
from director_graph import director_engine
from skill_engine import skill_executor_instance as skill_executor
from token_accountant import accountant
from evaluator_engine import evaluator

# --- Token Cost Matrix (Deprecating local matrix for Global Skill) ---
# COST_PER_1K_TOKENS is now handled by TokenAccountant

load_dotenv()

# --- Security Hardening: PII Guard Setup ---
# Setup logging with PII Scrubber Filter (Priority 3)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("uvicorn")
logger.addFilter(PIIGuardFilter())

app = FastAPI(title="THE DUDE - AI Worker (True Engine)", version="1.0.0")

# --- Sovereign Intelligence Setup ---
# HFTextVectorizer ensures local embedding generation (No cloud dependency)
vectorizer = HFTextVectorizer(model_id="sentence-transformers/all-MiniLM-L6-v2")

# Initialize Splitters based on Domain (Industry Standard 2026)
domain_splitters = {
    "legal": RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100, separators=["\n\n", "\n", ".", " "]),
    "code": RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50, separators=["class ", "def ", "\n\n", "\n", " "]),
    "general": RecursiveCharacterTextSplitter(chunk_size=400, chunk_overlap=40, separators=["\n\n", "\n", ". ", " "])
}

# Initialize Semantic Cache (Standard: Redis 6.2+ or 7.0+)
REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379")
llm_cache = SemanticCache(
    name="rag_pro_cache",
    prefix="llmcache",
    redis_url=REDIS_URL,
    distance_threshold=0.1, # High fidelity threshold
    vectorizer=vectorizer
)

class ChunkingRequest(BaseModel):
    content: str
    strategy: Optional[str] = "adaptive"
    domain: Optional[str] = "general"

class SkillExecutionRequest(BaseModel):
    skill_id: str
    content: str

class EmbeddingResponse(BaseModel):
    chunks: List[str]
    vectors: List[List[float]]
    model_used: str
    cached: bool = False

@app.get("/health")
def health_check():
    return {"status": "online", "engine": "The Dude 7.0 - RedisVL Active"}

@app.post("/process-document", response_model=EmbeddingResponse)
async def process_document(request: ChunkingRequest):
    # 1. Check Semantic Cache first (ROI Pillar: -60% Cost)
    cached_response = llm_cache.check(prompt=request.content)
    if cached_response:
        return {
            "chunks": [cached_response[0]["response"]],
            "vectors": [],
            "model_used": "cache-hit",
            "cached": True
        }

    # 2. Real Adaptive Chunking Logic (Industrial v7.4)
    # Using recursive character splitting based on domain
    splitter = domain_splitters.get(request.domain, domain_splitters["general"])
    chunks = splitter.split_text(request.content)

    # 3. Vectorize (Sovereign Inference)
    try:
        vectors = vectorizer.embed_many(chunks)
        # Estimate tokens (roughly: 1 word = 1.3 tokens)
        token_count = sum(len(c.split()) for c in chunks) * 1.3
        # Saved cost equivalent to GPT-4o embedding price ($0.10 per 1M tokens)
        cost_saved = (token_count / 1_000_000) * 0.10

        # Log to "Financial Vault" (Local log or Redis)
        logger.info(f"[[FINANCIAL_AUDIT]] Saved {cost_saved}$ by local embedding for {token_count} tokens.")

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Embedding error: {str(e)}")

    # Cost tracking (Industrial)
    real_cost = accountant.calculate_cost("gpt-4o", token_count, 0)

    logger.info(f"[[SOVEREIGN_RAG]] Document processed. Saved ${cost_saved} (Audit Cost: ${real_cost})")

    return {
        "chunks": chunks,
        "vectors": vectors.tolist() if isinstance(vectors, np.ndarray) else vectors,
        "model_used": "all-MiniLM-L6-v2 (Local)",
        "cached": False,
        "tokens_processed": token_count,
        "cost_saved": cost_saved,
        "real_cost": real_cost
    }

@app.post("/director/run")
async def run_director(request: dict):
    """
    Run the Intelligent Engine Director (LangGraph).
    """
    try:
        # Initialize state from request
        initial_state = {
            "task": request.get("task", "general_audit"),
            "plan": [],
            "results": [],
            "status": "started",
            "next_step": "planner"
        }

        final_state = director_engine.invoke(initial_state)
        return final_state
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/skills/execute")
async def execute_skill(request: SkillExecutionRequest):
    """
    Execute a global skill using the SkillExecutor.
    """
    result = await skill_executor.execute(request.skill_id, request.content)
    if "error" in result:
        raise HTTPException(status_code=400, detail=result["error"])
    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
