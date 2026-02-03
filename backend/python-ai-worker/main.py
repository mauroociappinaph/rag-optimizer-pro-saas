from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import os

app = FastAPI(title="THE DUDE - AI Worker", version="1.0.0")

class ChunkingRequest(BaseModel):
    content: str
    metadata: Optional[dict] = {}

class EmbeddingResponse(BaseModel):
    chunks: List[str]
    vectors: List[List[float]]
    model_used: str

@app.get("/health")
def health_check():
    return {"status": "online", "engine": "The Dude 7.0"}

@app.post("/process-document", response_model=EmbeddingResponse)
async def process_document(request: ChunkingRequest):
    # TODO: Implementar Adaptive Chunking (Skill: AI-Engineer)
    # Por ahora devolvemos un mock para validar comunicación con NestJS
    mock_chunks = [request.content[i:i+100] for i in range(0, len(request.content), 100)]
    return {
        "chunks": mock_chunks,
        "vectors": [[0.1] * 1536 for _ in mock_chunks],
        "model_used": "text-embedding-3-small"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
