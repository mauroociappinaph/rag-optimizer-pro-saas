'use client';

import { motion } from 'framer-motion';
import { Code, Copy, Check, Search } from 'lucide-react';
import { useState } from 'react';
import { API_ENDPOINTS } from '../data/api-endpoints';

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

  const categoriaActual = API_ENDPOINTS.find(e => e.categoria === categoriaActiva);

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
                {API_ENDPOINTS.map((endpoint) => (
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
