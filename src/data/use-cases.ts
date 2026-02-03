import { Building2, Stethoscope, Scale, ShoppingCart, GraduationCap, Headphones } from 'lucide-react';
import { UseCase } from '../types';

export const USE_CASES: UseCase[] = [
  {
    id: 'enterprise',
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
  }
];
