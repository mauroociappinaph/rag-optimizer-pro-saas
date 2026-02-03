import { motion } from 'framer-motion';
import { Code, Copy, Check, Search, Book, Zap, Database, Brain, BarChart } from 'lucide-react';
import { useState } from 'react';

const endpoints = [
  {
    categoria: 'Embeddings',
    icon: Brain,
    items: [
      {
        method: 'POST',
        path: '/api/v1/embeddings/optimize',
        descripcion: 'Optimiza automáticamente el modelo de embedding para tu dataset',
        params: [
          { nombre: 'dataset_id', tipo: 'string', requerido: true, descripcion: 'ID del dataset a analizar' },
          { nombre: 'target_latency', tipo: 'number', requerido: false, descripcion: 'Latencia objetivo en ms' },
          { nombre: 'quantize', tipo: 'boolean', requerido: false, descripcion: 'Habilitar auto-quantization' }
        ],
        response: `{
  "status": "success",
  "recommended_model": "all-MiniLM-L6-v2",
  "quantization": "int8",
  "estimated_latency": 12,
  "storage_reduction": "58%"
}`
      },
      {
        method: 'GET',
        path: '/api/v1/embeddings/models',
        descripcion: 'Lista todos los modelos de embedding disponibles',
        params: [],
        response: `{
  "models": [
    {
      "id": "all-MiniLM-L6-v2",
      "dimensions": 384,
      "max_tokens": 256,
      "quantization_options": ["fp32", "fp16", "int8"]
    }
  ]
}`
      },
      {
        method: 'POST',
        path: '/api/v1/embeddings/generate',
        descripcion: 'Genera embeddings para texto usando el modelo optimizado',
        params: [
          { nombre: 'text', tipo: 'string | string[]', requerido: true, descripcion: 'Texto o array de textos' },
          { nombre: 'model_id', tipo: 'string', requerido: false, descripcion: 'ID del modelo (usa el optimizado por defecto)' }
        ],
        response: `{
  "embeddings": [[0.123, -0.456, ...]],
  "model": "all-MiniLM-L6-v2",
  "dimensions": 384,
  "tokens_used": 42
}`
      }
    ]
  },
  {
    categoria: 'Cache',
    icon: Database,
    items: [
      {
        method: 'POST',
        path: '/api/v1/cache/query',
        descripcion: 'Consulta el cache semántico antes de llamar al LLM',
        params: [
          { nombre: 'query', tipo: 'string', requerido: true, descripcion: 'Consulta del usuario' },
          { nombre: 'similarity_threshold', tipo: 'number', requerido: false, descripcion: 'Umbral de similitud (0-1)' }
        ],
        response: `{
  "hit": true,
  "cached_response": "La respuesta cacheada...",
  "similarity": 0.94,
  "savings": "$0.0023"
}`
      },
      {
        method: 'POST',
        path: '/api/v1/cache/store',
        descripcion: 'Almacena una respuesta en el cache semántico',
        params: [
          { nombre: 'query', tipo: 'string', requerido: true, descripcion: 'Consulta original' },
          { nombre: 'response', tipo: 'string', requerido: true, descripcion: 'Respuesta a cachear' },
          { nombre: 'ttl', tipo: 'number', requerido: false, descripcion: 'Time-to-live en segundos' }
        ],
        response: `{
  "status": "stored",
  "cache_key": "sem_abc123",
  "ttl": 3600,
  "tier": "hot"
}`
      },
      {
        method: 'GET',
        path: '/api/v1/cache/stats',
        descripcion: 'Obtiene estadísticas del cache',
        params: [],
        response: `{
  "hit_rate": 0.78,
  "total_queries": 15420,
  "cache_hits": 12028,
  "savings_total": "$1,234.56",
  "tiers": {
    "hot": { "size": "2.3GB", "entries": 5420 },
    "warm": { "size": "12GB", "entries": 45000 },
    "cold": { "size": "89GB", "entries": 234000 }
  }
}`
      }
    ]
  },
  {
    categoria: 'Chunking',
    icon: Book,
    items: [
      {
        method: 'POST',
        path: '/api/v1/chunking/analyze',
        descripcion: 'Analiza un documento y recomienda estrategia de chunking',
        params: [
          { nombre: 'document_id', tipo: 'string', requerido: true, descripcion: 'ID del documento' },
          { nombre: 'domain', tipo: 'string', requerido: false, descripcion: 'Dominio (code, legal, medical, etc.)' }
        ],
        response: `{
  "recommended_strategy": "semantic",
  "optimal_chunk_size": 512,
  "overlap": 64,
  "estimated_chunks": 42,
  "domain_detected": "technical_documentation"
}`
      },
      {
        method: 'POST',
        path: '/api/v1/chunking/process',
        descripcion: 'Procesa un documento con la estrategia de chunking optimizada',
        params: [
          { nombre: 'document_id', tipo: 'string', requerido: true, descripcion: 'ID del documento' },
          { nombre: 'strategy', tipo: 'string', requerido: false, descripcion: 'Estrategia a usar' }
        ],
        response: `{
  "status": "processed",
  "chunks_created": 42,
  "avg_chunk_size": 487,
  "processing_time": "1.2s"
}`
      }
    ]
  },
  {
    categoria: 'Reranking',
    icon: Zap,
    items: [
      {
        method: 'POST',
        path: '/api/v1/rerank',
        descripcion: 'Reordena resultados de búsqueda usando el modelo fine-tuned',
        params: [
          { nombre: 'query', tipo: 'string', requerido: true, descripcion: 'Consulta del usuario' },
          { nombre: 'documents', tipo: 'array', requerido: true, descripcion: 'Array de documentos a reordenar' },
          { nombre: 'top_k', tipo: 'number', requerido: false, descripcion: 'Número de resultados a devolver' }
        ],
        response: `{
  "results": [
    { "document_id": "doc_123", "score": 0.95, "position": 1 },
    { "document_id": "doc_456", "score": 0.87, "position": 2 }
  ],
  "model": "cross-encoder-custom-v2",
  "latency_ms": 23
}`
      }
    ]
  },
  {
    categoria: 'Analytics',
    icon: BarChart,
    items: [
      {
        method: 'GET',
        path: '/api/v1/analytics/dashboard',
        descripcion: 'Obtiene métricas del dashboard en tiempo real',
        params: [
          { nombre: 'period', tipo: 'string', requerido: false, descripcion: 'Período: 1h, 24h, 7d, 30d' }
        ],
        response: `{
  "period": "24h",
  "metrics": {
    "total_queries": 45230,
    "cache_hit_rate": 0.76,
    "avg_latency_ms": 89,
    "llm_cost_saved": "$234.56",
    "embedding_cost": "$12.34"
  }
}`
      },
      {
        method: 'GET',
        path: '/api/v1/analytics/recommendations',
        descripcion: 'Obtiene recomendaciones de optimización basadas en IA',
        params: [],
        response: `{
  "recommendations": [
    {
      "type": "quantization",
      "title": "Cuantizar a int8",
      "impact": "Ahorra $3K/mes",
      "tradeoff": "+2ms latencia",
      "confidence": 0.92
    }
  ]
}`
      }
    ]
  }
];

export function ApiReferencePage() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaActiva, setCategoriaActiva] = useState('Embeddings');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'POST': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'PUT': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'DELETE': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const categoriaActual = endpoints.find(e => e.categoria === categoriaActiva);

  return (
    <div className="min-h-screen bg-[#0a0a0b] pt-20">
      {/* Hero */}
      <section className="py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">API Reference v1.4</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              API <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Reference</span>
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Documentación completa de la API REST de RAGOptimizer. 
              Integra optimización de RAG en tus aplicaciones.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-500">Base URL:</span>
              <code className="px-3 py-1 bg-white/5 border border-white/10 rounded text-orange-400">
                https://api.ragoptimizer.com/v1
              </code>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Búsqueda */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Buscar endpoints..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 text-sm"
                />
              </div>

              {/* Categorías */}
              <nav className="space-y-1">
                {endpoints.map((endpoint) => (
                  <button
                    key={endpoint.categoria}
                    onClick={() => setCategoriaActiva(endpoint.categoria)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                      categoriaActiva === endpoint.categoria
                        ? 'bg-orange-500/20 text-orange-400 border-l-2 border-orange-500'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <endpoint.icon className="w-5 h-5" />
                    <span className="font-medium">{endpoint.categoria}</span>
                    <span className="ml-auto text-xs bg-white/10 px-2 py-0.5 rounded">
                      {endpoint.items.length}
                    </span>
                  </button>
                ))}
              </nav>

              {/* Auth Info */}
              <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-lg">
                <h4 className="text-sm font-semibold text-white mb-2">Autenticación</h4>
                <p className="text-xs text-gray-400 mb-3">
                  Incluye tu API key en el header de cada request:
                </p>
                <code className="block text-xs bg-black/30 p-2 rounded text-gray-300">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            {categoriaActual && (
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-6">
                  <categoriaActual.icon className="w-8 h-8 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">{categoriaActual.categoria}</h2>
                </div>

                {categoriaActual.items.map((endpoint, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                  >
                    {/* Endpoint Header */}
                    <div className="p-6 border-b border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded text-xs font-bold border ${getMethodColor(endpoint.method)}`}>
                          {endpoint.method}
                        </span>
                        <code className="text-white font-mono">{endpoint.path}</code>
                      </div>
                      <p className="text-gray-400">{endpoint.descripcion}</p>
                    </div>

                    {/* Parameters */}
                    {endpoint.params.length > 0 && (
                      <div className="p-6 border-b border-white/10">
                        <h4 className="text-sm font-semibold text-white mb-4">Parámetros</h4>
                        <div className="space-y-3">
                          {endpoint.params.map((param, i) => (
                            <div key={i} className="flex items-start gap-4">
                              <div className="flex items-center gap-2">
                                <code className="text-orange-400 text-sm">{param.nombre}</code>
                                {param.requerido && (
                                  <span className="text-xs text-red-400">*</span>
                                )}
                              </div>
                              <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                                {param.tipo}
                              </span>
                              <span className="text-sm text-gray-400 flex-1">
                                {param.descripcion}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Response */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-semibold text-white">Response</h4>
                        <button
                          onClick={() => copyToClipboard(endpoint.response, `${categoriaActual.categoria}-${index}`)}
                          className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
                        >
                          {copiedCode === `${categoriaActual.categoria}-${index}` ? (
                            <>
                              <Check className="w-4 h-4 text-green-400" />
                              <span className="text-green-400">Copiado</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copiar</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="bg-black/30 rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm text-gray-300">{endpoint.response}</code>
                      </pre>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Rate Limits */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Rate Limits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { plan: 'Starter', requests: '1,000', period: 'por minuto' },
              { plan: 'Pro', requests: '10,000', period: 'por minuto' },
              { plan: 'Enterprise', requests: 'Ilimitado', period: 'personalizado' }
            ].map((limit, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{limit.plan}</h3>
                <p className="text-3xl font-bold text-orange-400 mb-1">{limit.requests}</p>
                <p className="text-sm text-gray-400">{limit.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
