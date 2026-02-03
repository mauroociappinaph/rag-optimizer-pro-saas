import { motion } from 'framer-motion';
import { 
  Brain, 
  Layers, 
  Scissors, 
  ListOrdered,
  Cpu,
  Gauge,
  Target
} from 'lucide-react';

const features = [
  {
    id: 'embedding',
    icon: Brain,
    title: 'Embedding Auto-Selection',
    subtitle: 'Selección Automática de Incrustaciones',
    tech: 'CNN + Reinforcement Learning',
    description: 'Red neuronal que clasifica automáticamente el tipo de dato y un agente RL que prueba los top-3 modelos de embedding.',
    features: [
      'Clasificación automática: texto, código, tabular, imágenes',
      'Evaluación de trade-off: latencia, precisión y costo',
      'Auto-quantization: fp32 → fp16 → int8 con pruebas A/B'
    ],
    impact: '40-60% reducción en almacenamiento',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'caching',
    icon: Layers,
    title: 'Semantic Caching Inteligente',
    subtitle: 'Cache Semántico con IA Predictiva',
    tech: 'Modelos Predictivos + Adaptación Dinámica',
    description: 'Sistema de caché multinivel con predicción de consultas y TTL adaptativo basado en criticidad.',
    features: [
      'Predicción de hit probability basada en histórico',
      'Adaptive TTL según criticidad de consulta',
      'Multi-tier: Hot (Redis) → Warm (PostgreSQL) → Cold (S3)',
      'Calculadora ROI en tiempo real'
    ],
    impact: '70-85% hit rate, -60% costos LLM',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    id: 'chunking',
    icon: Scissors,
    title: 'Adaptive Chunking',
    subtitle: 'Segmentación Adaptativa Inteligente',
    tech: 'Análisis de Patrones + Optimización Combinatoria',
    description: 'Análisis de patrones de acceso para determinar el tamaño óptimo de chunk según el dominio.',
    features: [
      'Análisis de patrones de acceso a datos',
      'Domain-aware: documentos largos, código, tablas',
      'Fine-tuning continuo basado en calidad de recuperación'
    ],
    impact: '40-50% menos chunks por consulta',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'reranking',
    icon: ListOrdered,
    title: 'Reranking Automático',
    subtitle: 'Re-ordenamiento con Transfer Learning',
    tech: 'Transfer Learning + Fine-tuning de Dominio',
    description: 'Cross-encoder reranker ajustado específicamente al dominio con aprendizaje de feedback implícito.',
    features: [
      'Fine-tuning específico por dominio del cliente',
      'Aprendizaje de feedback implícito del LLM',
      'Métrica: Calidad = Precisión / Chunks necesarios'
    ],
    impact: '30-40% mejora en precisión de ranking',
    gradient: 'from-amber-500 to-yellow-500'
  }
];

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
          {features.map((feature, index) => (
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
