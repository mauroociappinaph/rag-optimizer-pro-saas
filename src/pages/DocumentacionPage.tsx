import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Book, 
  Code, 
  Zap, 
  Database,
  Search,
  Terminal,
  FileText,
  Settings,
  ArrowRight,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';

const sections = [
  { id: 'quickstart', label: 'Inicio Rápido', icon: Zap },
  { id: 'installation', label: 'Instalación', icon: Terminal },
  { id: 'configuration', label: 'Configuración', icon: Settings },
  { id: 'embedding', label: 'Auto-Embedding', icon: Database },
  { id: 'caching', label: 'Semantic Cache', icon: Database },
  { id: 'chunking', label: 'Adaptive Chunking', icon: FileText },
  { id: 'api', label: 'API Reference', icon: Code },
];

const codeExamples: Record<string, string> = {
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
curl -X POST https://api.ragoptimizer.io/v1/index \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "documents": [...],
    "index_name": "my-index",
    "options": {"auto_optimize": true}
  }'

# POST /v1/search
# Buscar con optimización
curl -X POST https://api.ragoptimizer.io/v1/search \\
  -H "Authorization: Bearer $API_KEY" \\
  -d '{
    "query": "¿Cuál es la política de devoluciones?",
    "index_name": "my-index",
    "top_k": 10,
    "rerank": true
  }'

# GET /v1/metrics
# Obtener métricas del sistema
curl https://api.ragoptimizer.io/v1/metrics \\
  -H "Authorization: Bearer $API_KEY"

# Response:
{
  "cache_hit_rate": 0.82,
  "avg_latency_ms": 45,
  "queries_today": 15420,
  "cost_savings_mtd": 2340.50
}`
};

export function DocumentacionPage() {
  const [activeSection, setActiveSection] = useState('quickstart');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeSection]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                <Book className="w-4 h-4" />
                Documentación
              </span>
              <h1 className="text-4xl font-bold text-white mb-2">
                Documentación Técnica
              </h1>
              <p className="text-slate-400">
                Todo lo que necesitas para integrar RAG Optimizer en tu proyecto
              </p>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Buscar en la documentación..."
                  className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 w-64"
                />
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8 py-12">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block w-64 shrink-0"
            >
              <div className="sticky top-24">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
                  Guías
                </h4>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-all ${
                        activeSection === section.id
                          ? 'bg-blue-500/10 text-blue-400 border-l-2 border-blue-500'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      <section.icon className="w-4 h-4" />
                      {section.label}
                    </button>
                  ))}
                </nav>

                <div className="mt-8 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                  <h4 className="font-semibold text-white mb-2">¿Necesitas ayuda?</h4>
                  <p className="text-sm text-slate-400 mb-4">
                    Nuestro equipo está listo para asistirte
                  </p>
                  <button className="w-full py-2 bg-slate-700 text-white text-sm rounded-lg hover:bg-slate-600 transition-colors">
                    Contactar Soporte
                  </button>
                </div>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 min-w-0"
            >
              <div className="prose prose-invert max-w-none">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {sections.find(s => s.id === activeSection)?.label}
                  </h2>
                  
                  {activeSection === 'quickstart' && (
                    <p className="text-slate-400 text-lg">
                      Comienza a usar RAG Optimizer en menos de 5 minutos. Esta guía te llevará desde la instalación hasta tu primera búsqueda optimizada.
                    </p>
                  )}
                  {activeSection === 'installation' && (
                    <p className="text-slate-400 text-lg">
                      RAG Optimizer se puede instalar usando pip, poetry o conda. Requiere Python 3.8+ y una instancia de Redis.
                    </p>
                  )}
                  {activeSection === 'configuration' && (
                    <p className="text-slate-400 text-lg">
                      Configura todos los aspectos de RAG Optimizer usando el objeto Config. Aquí encontrarás todas las opciones disponibles.
                    </p>
                  )}
                  {activeSection === 'embedding' && (
                    <p className="text-slate-400 text-lg">
                      El sistema de auto-selección de embeddings analiza tu contenido y elige el modelo más adecuado automáticamente.
                    </p>
                  )}
                  {activeSection === 'caching' && (
                    <p className="text-slate-400 text-lg">
                      El caché semántico inteligente reduce costos de LLM hasta un 60% al cachear respuestas para consultas semánticamente similares.
                    </p>
                  )}
                  {activeSection === 'chunking' && (
                    <p className="text-slate-400 text-lg">
                      El chunking adaptativo ajusta automáticamente el tamaño de los fragmentos según el tipo de documento y patrones de acceso.
                    </p>
                  )}
                  {activeSection === 'api' && (
                    <p className="text-slate-400 text-lg">
                      Referencia completa de la API REST. Todos los endpoints requieren autenticación mediante API key.
                    </p>
                  )}
                </div>

                {/* Code Block */}
                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-400">
                        {activeSection === 'api' ? 'bash' : 'python'}
                      </span>
                    </div>
                    <button
                      onClick={copyCode}
                      className="flex items-center gap-2 px-3 py-1 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-400" />
                          Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copiar
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-6 overflow-x-auto">
                    <code className="text-sm text-slate-300 font-mono">
                      {codeExamples[activeSection]}
                    </code>
                  </pre>
                </div>

                {/* Next Steps */}
                <div className="mt-12 grid md:grid-cols-2 gap-4">
                  {activeSection !== 'api' && (
                    <button
                      onClick={() => {
                        const currentIndex = sections.findIndex(s => s.id === activeSection);
                        if (currentIndex < sections.length - 1) {
                          setActiveSection(sections[currentIndex + 1].id);
                        }
                      }}
                      className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl text-left hover:bg-slate-800/50 transition-all group"
                    >
                      <p className="text-sm text-slate-400 mb-1">Siguiente</p>
                      <p className="font-semibold text-white flex items-center gap-2">
                        {sections[sections.findIndex(s => s.id === activeSection) + 1]?.label}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </p>
                    </button>
                  )}
                  <a
                    href="#"
                    className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl text-left hover:from-blue-500/20 hover:to-cyan-500/20 transition-all"
                  >
                    <p className="text-sm text-blue-400 mb-1">Recurso</p>
                    <p className="font-semibold text-white flex items-center gap-2">
                      Ver ejemplos en GitHub
                      <ExternalLink className="w-4 h-4" />
                    </p>
                  </a>
                </div>
              </div>
            </motion.main>
          </div>
        </div>
      </section>
    </div>
  );
}
