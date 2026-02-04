'use client';

import { motion } from 'framer-motion';
import {
  Database,
  Cpu,
  Zap,
  Shield,
  Cloud,
  BarChart3,
  Lock,
  RefreshCw,
  ArrowRight,
  Check,
  Play
} from 'lucide-react';

const productFeatures = [
  {
    icon: Cpu,
    title: 'Motor de IA Avanzado',
    description: 'Algoritmos de machine learning que optimizan automáticamente cada componente de tu pipeline RAG.'
  },
  {
    icon: Database,
    title: 'Redis como Núcleo',
    description: 'Aprovecha la velocidad y flexibilidad de Redis para búsquedas vectoriales de alta performance.'
  },
  {
    icon: Zap,
    title: 'Optimización en Tiempo Real',
    description: 'Ajustes automáticos continuos basados en patrones de uso y métricas de rendimiento.'
  },
  {
    icon: Shield,
    title: 'Seguridad Enterprise',
    description: 'Cifrado end-to-end, SOC 2 Type II, y cumplimiento GDPR para datos sensibles.'
  },
  {
    icon: Cloud,
    title: 'Multi-Cloud',
    description: 'Despliega en AWS, GCP, Azure o en tu infraestructura on-premise.'
  },
  {
    icon: BarChart3,
    title: 'Observabilidad Total',
    description: 'Dashboard en tiempo real con métricas, alertas y recomendaciones de IA.'
  }
];

const architecture = [
  { layer: 'Aplicación', items: ['LangChain', 'LlamaIndex', 'Custom Apps'] },
  { layer: 'Optimización', items: ['Auto-Embedding', 'Adaptive Chunking', 'Reranking'] },
  { layer: 'Cache', items: ['Semantic Cache', 'Multi-Tier', 'Predictive'] },
  { layer: 'Almacenamiento', items: ['RedisVL', 'PostgreSQL', 'S3'] }
];

export function ProductoPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
              <Database className="w-4 h-4" />
              Producto
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              La Plataforma Completa para{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                RAG Enterprise
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl">
              Una solución end-to-end que elimina la complejidad del tuning manual y te permite enfocarte en construir aplicaciones de IA increíbles.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-red-500 hover:to-orange-500 transition-all">
                Comenzar Prueba Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                <Play className="w-5 h-5" />
                Ver Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Todo lo que Necesitas
            </h2>
            <p className="text-xl text-slate-400">
              Una plataforma, infinitas posibilidades
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all"
              >
                <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl w-fit mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Arquitectura de la Plataforma
            </h2>
            <p className="text-xl text-slate-400">
              Diseñada para escalar desde MVP hasta millones de usuarios
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {architecture.map((layer, index) => (
              <motion.div
                key={layer.layer}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="mb-4"
              >
                <div className={`p-6 rounded-2xl border ${
                  index === 0 ? 'bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border-purple-500/30' :
                  index === 1 ? 'bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30' :
                  index === 2 ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/30' :
                  'bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/30'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">{layer.layer}</span>
                    <div className="flex gap-3">
                      {layer.items.map((item) => (
                        <span key={item} className="px-3 py-1 bg-slate-800/50 rounded-lg text-sm text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {index < architecture.length - 1 && (
                  <div className="flex justify-center py-2">
                    <RefreshCw className="w-5 h-5 text-slate-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
                <Lock className="w-4 h-4" />
                Seguridad
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                Seguridad de Nivel Enterprise
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                Construido desde cero con la seguridad como prioridad. Cumplimos con los estándares más exigentes de la industria.
              </p>
              <ul className="space-y-4">
                {[
                  'Cifrado AES-256 en reposo y TLS 1.3 en tránsito',
                  'SOC 2 Type II certificado',
                  'Cumplimiento GDPR y CCPA',
                  'Auditorías de seguridad trimestrales',
                  'SSO con SAML 2.0 y OAuth 2.0',
                  'Control de acceso basado en roles (RBAC)'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 blur-3xl opacity-30" />
              <div className="relative bg-slate-800/50 border border-slate-700 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Uptime', value: '99.99%' },
                    { label: 'Cifrado', value: 'AES-256' },
                    { label: 'Certificación', value: 'SOC 2' },
                    { label: 'Backups', value: 'Cada 1h' }
                  ].map((stat) => (
                    <div key={stat.label} className="p-6 bg-slate-900/50 rounded-xl text-center">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
