import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Database, 
  DollarSign, 
  Zap,
  Target,
  Check,
  ArrowRight
} from 'lucide-react';
import { ROICalculator } from './ROICalculator';

import { ROI_BENEFITS as benefits } from '../data/roi-benefits';

export function ROI() {
  return (
    <section id="roi" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Retorno de Inversión
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Beneficios Medibles
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Cada característica está diseñada para generar valor tangible desde el día uno
          </p>
        </motion.div>

        {/* ROI Interactive Calculator */}
        <div className="mb-24">
          <ROICalculator />
        </div>

        {/* Benefits Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden mb-16"
        >
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 p-6 bg-slate-800/50 border-b border-slate-700 text-sm font-semibold text-slate-400 uppercase tracking-wide">
            <div>Característica</div>
            <div>Beneficio Principal</div>
            <div>Impacto</div>
            <div></div>
          </div>
          
          {/* Rows */}
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-4 gap-4 p-6 border-b border-slate-800 hover:bg-slate-800/30 transition-colors items-center"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color}`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-white">{item.feature}</span>
              </div>
              <div className="text-slate-300">{item.benefit}</div>
              <div>
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  {item.impact}
                </span>
                <span className="text-slate-400 ml-2">{item.description}</span>
              </div>
              <div className="flex justify-end">
                <Check className="w-6 h-6 text-green-400" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 blur-3xl opacity-50" />
          
          <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-10 md:p-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para optimizar tu RAG?
            </h3>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Únete a los equipos de ML que ya están ahorrando hasta un 60% en costos de infraestructura
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-red-500 hover:to-orange-500 transition-all shadow-lg shadow-red-500/25">
                Comenzar Prueba Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                Hablar con Ventas
              </button>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Sin tarjeta de crédito • 14 días de prueba • Cancelación en cualquier momento
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
