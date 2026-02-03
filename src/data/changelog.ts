import { Release } from '../types';

export const RELEASES: Release[] = [
  {
    version: '1.4.2',
    date: '15 Enero 2025',
    type: 'patch',
    highlights: [
      { type: 'fix', text: 'Corregido memory leak en semantic cache' },
      { type: 'improvement', text: 'Mejora del 15% en latencia' }
    ]
  },
  {
    version: '1.0.0',
    date: '15 Octubre 2024',
    type: 'major',
    highlights: [
      { type: 'feature', text: '🎉 Lanzamiento inicial de RAG Optimizer Pro' }
    ]
  }
];
