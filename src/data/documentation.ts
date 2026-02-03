import { Zap, Terminal, Settings, Database, FileText, Code } from 'lucide-react';

export const DOCUMENTATION_SECTIONS = [
  { id: 'quickstart', label: 'Inicio Rápido', icon: Zap },
  { id: 'installation', label: 'Instalación', icon: Terminal },
  { id: 'configuration', label: 'Configuración', icon: Settings },
  { id: 'embedding', label: 'Auto-Embedding', icon: Database },
  { id: 'caching', label: 'Semantic Cache', icon: Database },
  { id: 'chunking', label: 'Adaptive Chunking', icon: FileText },
  { id: 'api', label: 'API Reference', icon: Code },
];

export const DOCUMENTATION_EXAMPLES: Record<string, string> = {
  quickstart: `# Instalación
pip install rag-optimizer

# Inicialización rápida
from rag_optimizer import RAGOptimizer

optimizer = RAGOptimizer(
    redis_url="redis://localhost:6379",
    auto_optimize=True
)

# Indexar documentos
optimizer.index(documents)

# Buscar con optimización automática
results = optimizer.search("¿Cuál es la política de devoluciones?")`,

  installation: `# Usando pip
pip install rag-optimizer

# Usando poetry
poetry add rag-optimizer

# Usando conda
conda install -c rag-optimizer rag-optimizer

# Verificar instalación
python -c "import rag_optimizer; print(rag_optimizer.__version__)"
# Output: 1.4.2`,

  configuration: `from rag_optimizer import RAGOptimizer, Config

config = Config(
    # Conexión Redis
    redis_url="redis://localhost:6379",
    redis_password="your-password",
    
    # Optimización de embeddings
    embedding_auto_select=True,
    embedding_quantization="auto",  # auto, fp32, fp16, int8
    
    # Semantic caching
    cache_enabled=True,
    cache_ttl_strategy="adaptive",
    cache_tiers=["redis", "postgresql", "s3"],
    
    # Chunking
    chunk_strategy="adaptive",
    chunk_size_range=(256, 2048),
    
    # Reranking
    rerank_enabled=True,
    rerank_model="cross-encoder/ms-marco-MiniLM-L-12-v2"
)

optimizer = RAGOptimizer(config=config)`,

  embedding: `from rag_optimizer import RAGOptimizer

optimizer = RAGOptimizer(
    redis_url="redis://localhost:6379",
    embedding_auto_select=True
)

# El sistema detecta automáticamente el tipo de contenido
# y selecciona el mejor modelo de embedding

# Para código
code_docs = ["def hello(): return 'world'", ...]
optimizer.index(code_docs, content_type="auto")
# Selecciona: CodeBERT o similar

# Para texto general
text_docs = ["La política de la empresa...", ...]
optimizer.index(text_docs, content_type="auto")
# Selecciona: text-embedding-3-small o similar

# Ver estadísticas de selección
print(optimizer.embedding_stats())
# {
#   "model_selected": "text-embedding-3-small",
#   "quantization": "int8",
#   "storage_reduction": "54%",
#   "latency_ms": 12
# }`,

  caching: `from rag_optimizer import RAGOptimizer

optimizer = RAGOptimizer(
    redis_url="redis://localhost:6379",
    cache_enabled=True,
    cache_ttl_strategy="adaptive"
)

# Las consultas se cachean automáticamente
result1 = optimizer.search("política de devoluciones")
# Cache MISS - Consulta procesada: 245ms

result2 = optimizer.search("reglas para devolver productos")
# Cache HIT (similitud semántica) - 3ms

# Configurar caché por capas
optimizer.configure_cache_tiers({
    "hot": {"backend": "redis", "max_size": "10GB"},
    "warm": {"backend": "postgresql", "max_size": "100GB"},
    "cold": {"backend": "s3", "bucket": "rag-cache"}
})

# Ver métricas de caché
print(optimizer.cache_metrics())
# {
#   "hit_rate": 0.82,
#   "estimated_savings_month": 3240.50,
#   "hot_entries": 15420,
#   "warm_entries": 89301
# }`,

  chunking: `from rag_optimizer import RAGOptimizer

optimizer = RAGOptimizer(
    redis_url="redis://localhost:6379",
    chunk_strategy="adaptive"
)

# Chunking adaptativo según el tipo de documento
documents = [
    {"content": long_legal_document, "type": "legal"},
    {"content": code_repository, "type": "code"},
    {"content": faq_page, "type": "faq"}
]

for doc in documents:
    chunks = optimizer.chunk(doc["content"], doc_type=doc["type"])
    print(f"Tipo: {doc['type']}, Chunks: {len(chunks)}, Tamaño promedio: {avg_size(chunks)}")

# Output:
# Tipo: legal, Chunks: 45, Tamaño promedio: 1024 tokens
# Tipo: code, Chunks: 120, Tamaño promedio: 256 tokens  
# Tipo: faq, Chunks: 30, Tamaño promedio: 512 tokens

# El sistema aprende de patrones de acceso
optimizer.learn_from_queries(query_logs)
# Ajusta tamaños de chunk basándose en qué fragmentos son más útiles`,

  api: `# Endpoints principales de la API REST

# POST /v1/index
# Indexar documentos
curl -X POST https://api.ragoptimizer.io/v1/index \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "documents": [...],
    "index_name": "my-index",
    "options": {"auto_optimize": true}
  }'

# POST /v1/search
# Buscar con optimización
curl -X POST https://api.ragoptimizer.io/v1/search \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "query": "¿Cuál es la política de devoluciones?",
    "index_name": "my-index",
    "top_k": 10,
    "rerank": true
  }'

# GET /v1/metrics
# Obtener métricas del sistema
curl https://api.ragoptimizer.io/v1/metrics \
  -H "Authorization: Bearer $API_KEY"

# Response:
{
  "cache_hit_rate": 0.82,
  "avg_latency_ms": 45,
  "queries_today": 15420,
  "cost_savings_mtd": 2340.50
}`
};

export const DOCUMENTATION_TEXTS: Record<string, string> = {
  quickstart: 'Comienza a usar RAG Optimizer en menos de 5 minutos. Esta guía te llevará desde la instalación hasta tu primera búsqueda optimizada.',
  installation: 'RAG Optimizer se puede instalar usando pip, poetry o conda. Requiere Python 3.8+ y una instancia de Redis.',
  configuration: 'Configura todos los aspectos de RAG Optimizer usando el objeto Config. Aquí encontrarás todas las opciones disponibles.',
  embedding: 'El sistema de auto-selección de embeddings analiza tu contenido y elige el modelo más adecuado automáticamente.',
  caching: 'El caché semántico inteligente reduce costos de LLM hasta un 60% al cachear respuestas para consultas semánticamente similares.',
  chunking: 'El chunking adaptativo ajusta automáticamente el tamaño de los fragmentos según el tipo de documento y patrones de acceso.',
  api: 'Referencia completa de la API REST. Todos los endpoints requieren autenticación mediante API key.'
};
