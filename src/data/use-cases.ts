import { UseCase } from '../types';

export const USE_CASES: UseCase[] = [
  {
    id: 'enterprise',
    titulo: 'Enterprise Knowledge Base',
    subtitulo: 'Búsqueda inteligente en documentación interna',
    descripcion: 'Optimiza la búsqueda semántica en millones de documentos internos, políticas y manuales.',
    imagen: '🏢',
    color: 'from-blue-500 to-cyan-500',
    desafios: ['Múltiples formatos', 'Alta latencia', 'Costos elevados'],
    solucion: ['Adaptive Chunking', 'Cache semántico', 'Reranking fine-tuned'],
    resultados: {
      metrica1: { valor: '73%', label: 'Reducción de costos' },
      metrica2: { valor: '2.3x', label: 'Mejora en relevancia' },
      metrica3: { valor: '150ms', label: 'Latencia promedio' }
    },
    testimonial: {
      texto: 'RAGOptimizer transformó nuestra búsqueda interna.',
      autor: 'Director de IT',
      empresa: 'Fortune 500'
    }
  },
  {
    id: 'healthcare',
    titulo: 'Healthcare & Medical',
    subtitulo: 'Asistentes clínicos y literatura médica',
    descripcion: 'Potencia asistentes de diagnóstico y búsqueda en literatura médica con RAG optimizado.',
    imagen: '🏥',
    color: 'from-green-500 to-emerald-500',
    desafios: ['Precisión crítica', 'Terminología compleja', 'Cumplimiento HIPAA'],
    solucion: ['Embeddings médicos', 'Reranking clínico', 'TTL adaptativo'],
    resultados: {
      metrica1: { valor: '94%', label: 'Precisión diagnóstica' },
      metrica2: { valor: '45%', label: 'Menos chunks' },
      metrica3: { valor: '$50K', label: 'Ahorro mensual' }
    },
    testimonial: {
      texto: 'La precisión del sistema ha mejorado dramáticamente.',
      autor: 'CTO',
      empresa: 'Health Tech'
    }
  }
];