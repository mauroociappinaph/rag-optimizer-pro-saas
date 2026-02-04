'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Layers,
  Scissors,
  ListOrdered,
  Cpu,
  Gauge,
  Target,
  ArrowRight,
  Zap,
  Database,
  BarChart3,
  Settings
} from 'lucide-react';

import { FEATURES, ADDITIONAL_FEATURES } from '../data/features';

export function CaracteristicasPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4" />
              Motor de IA
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Características del{' '}
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Motor de IA
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Cuatro pilares de optimización automática que transforman tu pipeline RAG de extremo a extremo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-2">{feature.title}</h2>
                  <p className="text-lg text-slate-400 mb-4">{feature.subtitle}</p>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300 mb-6">
                    <Cpu className="w-3 h-3" />
                    {feature.tech}
                  </div>

                  <p className="text-slate-300 mb-6">{feature.description}</p>

                  <ul className="space-y-3 mb-8">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400">
                        <Target className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button className="group inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium">
                    Ver documentación técnica
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 blur-3xl`} />
                  <div className="relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
                    <div className="text-center">
                      <Gauge className="w-16 h-16 text-white/50 mx-auto mb-6" />
                      <p className="text-sm text-slate-400 uppercase tracking-wide mb-2">Impacto Medido</p>
                      <p className={`text-5xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-2`}>
                        {feature.impact}
                      </p>
                      <p className="text-slate-400">{feature.impactLabel}</p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-800">
                      <div className="flex justify-around text-center">
                        <div>
                          <p className="text-2xl font-bold text-white">24/7</p>
                          <p className="text-sm text-slate-400">Optimización</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">&lt;50ms</p>
                          <p className="text-sm text-slate-400">Latencia</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">99.9%</p>
                          <p className="text-sm text-slate-400">Uptime</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Características Adicionales
            </h2>
            <p className="text-xl text-slate-400">
              Todo lo que necesitas para operar tu pipeline RAG con confianza
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDITIONAL_FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:bg-slate-800/50 transition-all"
              >
                <feature.icon className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para Probar?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Comienza tu prueba gratuita de 14 días y experimenta la diferencia
            </p>
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-red-500 hover:to-orange-500 transition-all">
              Comenzar Ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
