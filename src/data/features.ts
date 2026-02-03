import { Brain, Layers, Scissors, ListOrdered, BarChart3, Zap, Target, Settings, Database, Cpu } from 'lucide-react';
import { Feature } from '../types';

export const FEATURES: Feature[] = [
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
    impact: '40-60%',
    impactLabel: 'reducción en almacenamiento',
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
    impact: '70-85%',
    impactLabel: 'hit rate, -60% costos LLM',
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
    impact: '40-50%',
    impactLabel: 'menos chunks por consulta',
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
    impact: '30-40%',
    impactLabel: 'mejora en precisión de ranking',
    gradient: 'from-amber-500 to-yellow-500'
  }
];

export const ADDITIONAL_FEATURES = [
  {
    icon: BarChart3,
    title: 'Dashboard en Tiempo Real',
    description: 'Métricas clave: costos, cache hit rate, latencia y costo por interacción con LLM.'
  },
  {
    icon: Zap,
    title: 'Recomendaciones de IA',
    description: 'Sugerencias automáticas como "Cuantizar a int8: Ahorra $3K/mes, +2ms latencia".'
  },
  {
    icon: Target,
    title: 'Alertas Inteligentes',
    description: 'Detección temprana de explosiones de costos y anomalías en el sistema.'
  },
  {
    icon: Settings,
    title: 'Configuración Zero-Touch',
    description: 'Setup automático que detecta tu infraestructura y aplica configuraciones óptimas.'
  },
  {
    icon: Database,
    title: 'Multi-tier Storage',
    description: 'Arquitectura escalable: Hot (Redis), Warm (PostgreSQL), Cold (S3).'
  },
  {
    icon: Cpu,
    title: 'Auto-Scaling',
    description: 'Escala automáticamente según demanda para optimizar costos.'
  }
];
