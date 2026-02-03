import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, CheckCircle, Quote, Building2, Stethoscope, Scale, ShoppingCart, GraduationCap, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const casosDeUso = [
  {
    id: 'enterprise',
    icon: Building2,
    titulo: 'Enterprise Knowledge Base',
    subtitulo: 'Búsqueda inteligente en documentación interna',
    descripcion: 'Optimiza la búsqueda semántica en millones de documentos internos, políticas, manuales y bases de conocimiento corporativas.',
    imagen: '🏢',
    color: 'from-blue-500 to-cyan-500',
    desafios: [
      'Documentos en múltiples formatos y idiomas',
      'Alta latencia en búsquedas complejas',
      'Costos elevados de LLM para respuestas',
      'Resultados irrelevantes en búsquedas técnicas'
    ],
    solucion: [
      'Chunking adaptativo para documentos técnicos vs políticas',
      'Cache semántico para consultas frecuentes de HR y IT',
      'Reranking fine-tuned para terminología corporativa',
      'Embeddings optimizados por tipo de documento'
    ],
    resultados: {
      metrica1: { valor: '73%', label: 'Reducción de costos LLM' },
      metrica2: { valor: '2.3x', label: 'Mejora en relevancia' },
      metrica3: { valor: '150ms', label: 'Latencia promedio' }
    },
    testimonial: {
      texto: 'RAGOptimizer transformó nuestra búsqueda interna. Los empleados encuentran respuestas en segundos en lugar de horas.',
      autor: 'Director de IT',
      empresa: 'Fortune 500 Tech Company'
    }
  },
  {
    id: 'healthcare',
    icon: Stethoscope,
    titulo: 'Healthcare & Medical',
    subtitulo: 'Asistentes clínicos y búsqueda en literatura médica',
    descripcion: 'Potencia asistentes de diagnóstico, búsqueda en literatura médica y sistemas de soporte a decisiones clínicas con RAG optimizado.',
    imagen: '🏥',
    color: 'from-green-500 to-emerald-500',
    desafios: [
      'Precisión crítica en información médica',
      'Terminología especializada compleja',
      'Cumplimiento regulatorio (HIPAA)',
      'Actualizaciones constantes de literatura'
    ],
    solucion: [
      'Embeddings especializados para terminología médica',
      'Reranking con fine-tuning en datasets clínicos',
      'TTL adaptativo para guías vs investigación reciente',
      'Chunking semántico para papers científicos'
    ],
    resultados: {
      metrica1: { valor: '94%', label: 'Precisión diagnóstica' },
      metrica2: { valor: '45%', label: 'Menos chunks por query' },
      metrica3: { valor: '$50K', label: 'Ahorro mensual' }
    },
    testimonial: {
      texto: 'La precisión del sistema ha mejorado dramáticamente. Los médicos confían más en las recomendaciones.',
      autor: 'CTO',
      empresa: 'Health Tech Startup'
    }
  },
  {
    id: 'legal',
    icon: Scale,
    titulo: 'Legal & Compliance',
    subtitulo: 'Análisis de contratos y búsqueda jurídica',
    descripcion: 'Acelera la revisión de contratos, búsqueda de precedentes legales y análisis de cumplimiento normativo.',
    imagen: '⚖️',
    color: 'from-purple-500 to-violet-500',
    desafios: [
      'Documentos extremadamente largos',
      'Lenguaje legal complejo y específico',
      'Referencias cruzadas entre documentos',
      'Necesidad de citas exactas'
    ],
    solucion: [
      'Chunking especializado para contratos y leyes',
      'Cache de cláusulas y precedentes frecuentes',
      'Embeddings fine-tuned para lenguaje jurídico',
      'Preservación de contexto en documentos largos'
    ],
    resultados: {
      metrica1: { valor: '80%', label: 'Reducción tiempo revisión' },
      metrica2: { valor: '3x', label: 'Más precedentes encontrados' },
      metrica3: { valor: '99.2%', label: 'Precisión en citas' }
    },
    testimonial: {
      texto: 'Reducimos el tiempo de due diligence de semanas a días. El ROI fue inmediato.',
      autor: 'Partner',
      empresa: 'Top 10 Law Firm'
    }
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    titulo: 'E-commerce & Retail',
    subtitulo: 'Búsqueda de productos y asistentes de compra',
    descripcion: 'Mejora la experiencia de búsqueda de productos, recomendaciones personalizadas y asistentes de compra conversacionales.',
    imagen: '🛒',
    color: 'from-orange-500 to-red-500',
    desafios: [
      'Catálogos con millones de productos',
      'Búsquedas en lenguaje natural',
      'Alta demanda en picos de tráfico',
      'Personalización en tiempo real'
    ],
    solucion: [
      'Cache agresivo para productos populares',
      'Embeddings multimodales (texto + imagen)',
      'Auto-scaling del cache en eventos de alto tráfico',
      'Reranking basado en preferencias de usuario'
    ],
    resultados: {
      metrica1: { valor: '28%', label: 'Aumento conversión' },
      metrica2: { valor: '85%', label: 'Cache hit rate' },
      metrica3: { valor: '<50ms', label: 'Latencia búsqueda' }
    },
    testimonial: {
      texto: 'Durante Black Friday, el cache nos ahorró más de $100K en costos de inferencia.',
      autor: 'VP Engineering',
      empresa: 'Major E-commerce Platform'
    }
  },
  {
    id: 'education',
    icon: GraduationCap,
    titulo: 'Education & EdTech',
    subtitulo: 'Tutores IA y búsqueda en contenido educativo',
    descripcion: 'Potencia tutores virtuales, sistemas de búsqueda en materiales educativos y asistentes de aprendizaje personalizados.',
    imagen: '📚',
    color: 'from-yellow-500 to-amber-500',
    desafios: [
      'Contenido en múltiples niveles de dificultad',
      'Necesidad de explicaciones adaptativas',
      'Gran volumen de preguntas repetitivas',
      'Contenido multimedia diverso'
    ],
    solucion: [
      'Chunking por nivel educativo y tema',
      'Cache de explicaciones y ejemplos comunes',
      'Embeddings adaptados por materia',
      'TTL largo para contenido curricular estable'
    ],
    resultados: {
      metrica1: { valor: '92%', label: 'Satisfacción estudiantes' },
      metrica2: { valor: '65%', label: 'Reducción costos' },
      metrica3: { valor: '4.2x', label: 'Más interacciones' }
    },
    testimonial: {
      texto: 'Nuestro tutor IA ahora puede atender 10x más estudiantes con el mismo presupuesto.',
      autor: 'CEO',
      empresa: 'EdTech Unicorn'
    }
  },
  {
    id: 'support',
    icon: Headphones,
    titulo: 'Customer Support',
    subtitulo: 'Chatbots y bases de conocimiento de soporte',
    descripcion: 'Optimiza chatbots de atención al cliente, búsqueda en FAQs y sistemas de tickets inteligentes.',
    imagen: '🎧',
    color: 'from-pink-500 to-rose-500',
    desafios: [
      'Alto volumen de consultas repetitivas',
      'Necesidad de respuestas instantáneas',
      'Múltiples productos y versiones',
      'Escalación inteligente a humanos'
    ],
    solucion: [
      'Cache semántico con 85%+ hit rate',
      'Chunking por producto y categoría',
      'Reranking basado en feedback de usuarios',
      'TTL corto para issues conocidos activos'
    ],
    resultados: {
      metrica1: { valor: '70%', label: 'Deflexión de tickets' },
      metrica2: { valor: '$2M', label: 'Ahorro anual' },
      metrica3: { valor: '4.8/5', label: 'CSAT score' }
    },
    testimonial: {
      texto: 'El cache semántico cambió todo. El 80% de las consultas se responden instantáneamente.',
      autor: 'Head of Support',
      empresa: 'SaaS Leader'
    }
  }
];

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
            {casosDeUso.map((caso, index) => (
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
                          <caso.icon className="w-24 h-24 text-white/10" />
                        </div>
                        {/* Decorative elements */}
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
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Solicitar Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/precios"
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
