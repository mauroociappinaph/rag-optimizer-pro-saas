import { Zap, Code, Database, BookOpen, Shield, BarChart } from 'lucide-react';

export const GUIDES_CATEGORIES = ['Todas', 'Inicio Rápido', 'Embeddings', 'Caching', 'Chunking', 'Integraciones', 'Observabilidad'];
export const GUIDES_LEVELS = ['Todos', 'Principiante', 'Intermedio', 'Avanzado'];

export const GUIDES = [
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
