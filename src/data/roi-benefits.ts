import { Database, DollarSign, Zap, Target } from 'lucide-react';

export const ROI_BENEFITS = [
  {
    feature: 'Embedding Auto-Opt',
    benefit: 'Reducción de almacenamiento',
    impact: '40-60%',
    description: 'menos espacio',
    icon: Database,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    feature: 'Semantic Caching',
    benefit: 'Reducción de costos operativos',
    impact: '-60%',
    description: 'costos de LLM',
    icon: DollarSign,
    color: 'from-red-500 to-orange-500'
  },
  {
    feature: 'Adaptive Chunking',
    benefit: 'Eficiencia de consulta',
    impact: '40-50%',
    description: 'menos chunks usados',
    icon: Zap,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    feature: 'Auto-Reranking',
    benefit: 'Mejora de respuestas',
    impact: '30-40%',
    description: 'más precisión',
    icon: Target,
    color: 'from-amber-500 to-yellow-500'
  },
];
