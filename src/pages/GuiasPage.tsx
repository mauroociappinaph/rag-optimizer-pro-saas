import { motion } from 'framer-motion';
import { Book, Clock, ArrowRight, Search, Filter, BookOpen, Code, Database, Zap, Shield, BarChart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const guias = [
  {
    id: 1,
    categoria: 'Inicio Rápido',
    icon: Zap,
    titulo: 'Tu primera pipeline RAG en 10 minutos',
    descripcion: 'Configura tu primera pipeline RAG optimizada con Redis en menos de 10 minutos.',
    tiempo: '10 min',
    nivel: 'Principiante',
    imagen: '🚀'
  },
  {
    id: 2,
    categoria: 'Inicio Rápido',
    icon: Zap,
    titulo: 'Instalación y configuración inicial',
    descripcion: 'Guía paso a paso para instalar RAGOptimizer en tu infraestructura.',
    tiempo: '15 min',
    nivel: 'Principiante',
    imagen: '⚙️'
  },
  {
    id: 3,
    categoria: 'Embeddings',
    icon: Code,
    titulo: 'Optimización automática de embeddings',
    descripcion: 'Aprende cómo el motor de IA selecciona y optimiza embeddings automáticamente.',
    tiempo: '20 min',
    nivel: 'Intermedio',
    imagen: '🧠'
  },
  {
    id: 4,
    categoria: 'Embeddings',
    icon: Code,
    titulo: 'Cuantización de modelos: fp32 a int8',
    descripcion: 'Reduce el almacenamiento un 60% sin perder precisión con auto-quantization.',
    tiempo: '25 min',
    nivel: 'Avanzado',
    imagen: '📉'
  },
  {
    id: 5,
    categoria: 'Caching',
    icon: Database,
    titulo: 'Configuración de Semantic Cache',
    descripcion: 'Implementa caching semántico inteligente para reducir costos de LLM.',
    tiempo: '20 min',
    nivel: 'Intermedio',
    imagen: '💾'
  },
  {
    id: 6,
    categoria: 'Caching',
    icon: Database,
    titulo: 'Arquitectura Multi-tier: Hot, Warm, Cold',
    descripcion: 'Configura una arquitectura de caching en capas con Redis, PostgreSQL y S3.',
    tiempo: '30 min',
    nivel: 'Avanzado',
    imagen: '🏗️'
  },
  {
    id: 7,
    categoria: 'Chunking',
    icon: BookOpen,
    titulo: 'Adaptive Chunking para documentos',
    descripcion: 'Optimiza la segmentación de documentos según patrones de acceso.',
    tiempo: '15 min',
    nivel: 'Intermedio',
    imagen: '📄'
  },
  {
    id: 8,
    categoria: 'Chunking',
    icon: BookOpen,
    titulo: 'Estrategias de chunking por dominio',
    descripcion: 'Configura estrategias específicas para código, tablas y documentos largos.',
    tiempo: '25 min',
    nivel: 'Avanzado',
    imagen: '🎯'
  },
  {
    id: 9,
    categoria: 'Integraciones',
    icon: Shield,
    titulo: 'Integración con LangChain',
    descripcion: 'Conecta RAGOptimizer con tus pipelines de LangChain existentes.',
    tiempo: '20 min',
    nivel: 'Intermedio',
    imagen: '🔗'
  },
  {
    id: 10,
    categoria: 'Integraciones',
    icon: Shield,
    titulo: 'Integración con LlamaIndex',
    descripcion: 'Optimiza tus aplicaciones LlamaIndex con RAGOptimizer.',
    tiempo: '20 min',
    nivel: 'Intermedio',
    imagen: '🦙'
  },
  {
    id: 11,
    categoria: 'Observabilidad',
    icon: BarChart,
    titulo: 'Configuración del Dashboard',
    descripcion: 'Personaliza métricas, alertas y visualizaciones en el panel de control.',
    tiempo: '15 min',
    nivel: 'Principiante',
    imagen: '📊'
  },
  {
    id: 12,
    categoria: 'Observabilidad',
    icon: BarChart,
    titulo: 'Alertas y monitoreo de costos',
    descripcion: 'Configura alertas tempranas para detectar explosiones de costos.',
    tiempo: '20 min',
    nivel: 'Intermedio',
    imagen: '🚨'
  }
];

const categorias = ['Todas', 'Inicio Rápido', 'Embeddings', 'Caching', 'Chunking', 'Integraciones', 'Observabilidad'];
const niveles = ['Todos', 'Principiante', 'Intermedio', 'Avanzado'];

export function GuiasPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  const [nivelActivo, setNivelActivo] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');

  const guiasFiltradas = guias.filter(guia => {
    const matchCategoria = categoriaActiva === 'Todas' || guia.categoria === categoriaActiva;
    const matchNivel = nivelActivo === 'Todos' || guia.nivel === nivelActivo;
    const matchBusqueda = guia.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                          guia.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchNivel && matchBusqueda;
  });

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'Principiante': return 'bg-green-500/20 text-green-400';
      case 'Intermedio': return 'bg-yellow-500/20 text-yellow-400';
      case 'Avanzado': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

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
              <Book className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Centro de Aprendizaje</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Guías y <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Tutoriales</span>
            </h1>
            <p className="text-xl text-gray-400">
              Aprende a dominar RAGOptimizer con nuestras guías paso a paso, 
              desde conceptos básicos hasta configuraciones avanzadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 border-b border-white/10 sticky top-16 bg-[#0a0a0b]/95 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Búsqueda */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar guías..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50"
              />
            </div>

            {/* Categorías */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoriaActiva(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    categoriaActiva === cat
                      ? 'bg-orange-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Nivel */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={nivelActivo}
                onChange={(e) => setNivelActivo(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500/50"
              >
                {niveles.map((nivel) => (
                  <option key={nivel} value={nivel} className="bg-[#0a0a0b]">{nivel}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Guías */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guiasFiltradas.map((guia, index) => (
              <motion.div
                key={guia.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{guia.imagen}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getNivelColor(guia.nivel)}`}>
                      {guia.nivel}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <guia.icon className="w-4 h-4" />
                    <span>{guia.categoria}</span>
                    <span>•</span>
                    <Clock className="w-4 h-4" />
                    <span>{guia.tiempo}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {guia.titulo}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {guia.descripcion}
                  </p>
                  
                  <div className="flex items-center text-orange-400 text-sm font-medium group-hover:gap-2 transition-all">
                    <span>Leer guía</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {guiasFiltradas.length === 0 && (
            <div className="text-center py-12">
              <Book className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No se encontraron guías</h3>
              <p className="text-gray-400">Intenta con otros filtros o términos de búsqueda</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-gray-400 mb-8">
            Nuestro equipo de soporte está disponible para ayudarte con cualquier duda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Contactar Soporte
            </Link>
            <Link
              to="/comunidad"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Unirse a la Comunidad
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
