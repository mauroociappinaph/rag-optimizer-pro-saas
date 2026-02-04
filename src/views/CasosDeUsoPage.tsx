'use client';

import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, CheckCircle, Quote } from 'lucide-react';
import Link from 'next/link';
import { USE_CASES } from '../data/use-cases';

export function CasosDeUsoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] pt-20">
      {/* Hero */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Briefcase className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Casos de Uso</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              RAG Optimizado para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Tu Industria
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Descubre cómo empresas de diferentes sectores utilizan RAGOptimizer
              para transformar sus aplicaciones de IA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {USE_CASES.map((caso, index) => (
              <motion.div
                key={caso.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${caso.color} flex items-center justify-center text-3xl`}>
                      {caso.imagen}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{caso.titulo}</h2>
                      <p className="text-gray-400">{caso.subtitulo}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{caso.descripcion}</p>

                  {/* Desafíos y Soluciones */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                      <h4 className="text-sm font-semibold text-red-400 mb-3">Desafíos</h4>
                      <ul className="space-y-2">
                        {caso.desafios.map((desafio, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-red-400 mt-1">•</span>
                            {desafio}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                      <h4 className="text-sm font-semibold text-green-400 mb-3">Solución RAGOptimizer</h4>
                      <ul className="space-y-2">
                        {caso.solucion.map((sol, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {sol}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Resultados */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.values(caso.resultados).map((resultado, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${caso.color} bg-clip-text text-transparent`}>
                          {resultado.valor}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{resultado.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <Quote className="w-8 h-8 text-orange-400/50 mb-3" />
                    <p className="text-gray-300 italic mb-3">"{caso.testimonial.texto}"</p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white text-sm font-bold">
                        {caso.testimonial.autor.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm text-white font-medium">{caso.testimonial.autor}</p>
                        <p className="text-xs text-gray-500">{caso.testimonial.empresa}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className={`relative bg-gradient-to-br ${caso.color} p-[1px] rounded-2xl`}>
                    <div className="bg-[#0a0a0b] rounded-2xl p-8">
                      <div className="aspect-video bg-white/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                        <div className="text-8xl opacity-20">{caso.imagen}</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          {/* Decorative elements */}
                        </div>
                        <div className="absolute top-4 left-4 flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/50" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                          <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${caso.color} text-white`}>
                            Case Study
                          </span>
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

      {/* CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para optimizar tu RAG?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Agenda una demo personalizada para tu caso de uso específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Solicitar Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/precios"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Ver Precios
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
