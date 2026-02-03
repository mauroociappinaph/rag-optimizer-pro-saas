import { motion } from 'framer-motion';
import { 
  Cpu,
  Gauge,
  Target
} from 'lucide-react';
import { FEATURES } from '../data/features';

export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
            <Cpu className="w-4 h-4" />
            Motor de IA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Capacidades Core
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Cuatro pilares de optimización automática que transforman tu pipeline RAG
          </p>
        </motion.div>

        <div className="grid gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-10 hover:border-slate-700 transition-all overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${feature.gradient} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative grid md:grid-cols-3 gap-8">
                  {/* Left: Title and description */}
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient}`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{feature.title}</h3>
                        <p className="text-slate-400">{feature.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">
                        <Cpu className="w-3 h-3" />
                        {feature.tech}
                      </span>
                    </div>
                    
                    <p className="text-slate-300 mb-6">{feature.description}</p>
                    
                    <ul className="space-y-3">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400">
                          <Target className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Right: Impact */}
                  <div className="flex items-center justify-center">
                    <div className={`p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} bg-opacity-10`}>
                      <div className="text-center">
                        <Gauge className="w-12 h-12 text-white mx-auto mb-4 opacity-80" />
                        <p className="text-sm text-white/70 mb-2 uppercase tracking-wide">Impacto</p>
                        <p className="text-2xl font-bold text-white">{feature.impact}</p>
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
  );
}
