import { motion } from 'framer-motion';
import { Link2, Database, Blocks, FileText } from 'lucide-react';

const integrations = [
  {
    name: 'RedisVL',
    description: 'Librería vectorial de Redis para búsquedas de similitud de alto rendimiento',
    icon: Database,
    color: 'from-red-500 to-red-600',
    features: ['Vector Search', 'Hybrid Queries', 'Semantic Cache']
  },
  {
    name: 'LangChain',
    description: 'Framework orquestador para construir aplicaciones con LLMs',
    icon: Link2,
    color: 'from-emerald-500 to-teal-600',
    features: ['Chains', 'Agents', 'Memory']
  },
  {
    name: 'LlamaIndex',
    description: 'Framework de datos para conectar LLMs con fuentes de datos externas',
    icon: Blocks,
    color: 'from-purple-500 to-indigo-600',
    features: ['Data Loaders', 'Index Types', 'Query Engines']
  },
];

export function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
            <Link2 className="w-4 h-4" />
            Ecosistema
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Integraciones Nativas
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Conecta con las herramientas líderes en desarrollo de aplicaciones de IA
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-all h-full">
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${integration.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity`} />
                
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${integration.color} mb-6`}>
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{integration.name}</h3>
                <p className="text-slate-400 mb-6">{integration.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {integration.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-lg text-sm text-slate-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-slate-400" />
              <span className="text-slate-400 font-mono text-sm">ejemplo_integracion.py</span>
            </div>
            <pre className="text-sm font-mono overflow-x-auto">
              <code className="text-slate-300">
{`from rag_optimizer import RAGOptimizer
from langchain.vectorstores import Redis
from llama_index import VectorStoreIndex

# Inicializar el optimizador
optimizer = RAGOptimizer(
    redis_url="redis://localhost:6379",
    auto_embedding=True,
    semantic_cache=True,
    adaptive_chunking=True
)

# Integración automática con LangChain
vectorstore = optimizer.langchain_vectorstore(
    embedding_model="auto",  # Selección automática
    index_name="my_rag_index"
)

# O con LlamaIndex
index = optimizer.llama_index(
    documents=documents,
    chunk_strategy="adaptive"
)

# Métricas en tiempo real
print(optimizer.get_metrics())
# {
#   "cache_hit_rate": 0.82,
#   "avg_latency_ms": 45,
#   "cost_per_query": 0.003,
#   "storage_saved": "58%"
# }`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
