import { Post, FeaturedPost } from '../types';

export const CATEGORIES = ['Todos', 'Tutoriales', 'Casos de Uso', 'Actualizaciones', 'Investigación', 'Mejores Prácticas'];

export const FEATURED_POST: FeaturedPost = {
  id: 1,
  title: 'Cómo reducimos los costos de LLM en un 60% con Semantic Caching Inteligente',
  excerpt: 'Descubre las técnicas avanzadas que usamos para implementar un sistema de caché semántico que predice y almacena respuestas de forma inteligente, reduciendo dramáticamente los costos operativos.',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
  category: 'Casos de Uso',
  author: 'María García',
  authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  date: '15 Ene 2024',
  readTime: '8 min'
};

export const BLOG_POSTS: Post[] = [
  {
    id: 2,
    title: 'Guía Completa: Embedding Auto-Selection con CNN y Reinforcement Learning',
    excerpt: 'Aprende cómo nuestra tecnología selecciona automáticamente el mejor modelo de embedding para cada tipo de dato.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
    category: 'Tutoriales',
    author: 'David Chen',
    date: '12 Ene 2024',
    readTime: '12 min'
  },
  {
    id: 3,
    title: 'Novedades en RAGOptimizer v1.4: Auto-Reranking y más',
    excerpt: 'Descubre todas las nuevas características de nuestra última versión, incluyendo el revolucionario sistema de reranking automático.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    category: 'Actualizaciones',
    author: 'Carlos Mendoza',
    date: '10 Ene 2024',
    readTime: '5 min'
  },
  {
    id: 4,
    title: 'Adaptive Chunking: La ciencia detrás de la segmentación inteligente',
    excerpt: 'Un deep-dive técnico en cómo analizamos patrones de acceso para determinar el tamaño óptimo de chunks.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
    category: 'Investigación',
    author: 'Roberto Silva',
    date: '8 Ene 2024',
    readTime: '15 min'
  },
  {
    id: 5,
    title: '10 Mejores Prácticas para Optimizar tu Pipeline RAG',
    excerpt: 'Consejos prácticos y probados para mejorar la eficiencia y precisión de tus sistemas RAG.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    category: 'Mejores Prácticas',
    author: 'Ana Rodríguez',
    date: '5 Ene 2024',
    readTime: '10 min'
  },
  {
    id: 6,
    title: 'Integrando RAGOptimizer con LangChain: Tutorial paso a paso',
    excerpt: 'Una guía práctica para integrar nuestra plataforma con el popular framework de orquestación LangChain.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
    category: 'Tutoriales',
    author: 'Laura Martinez',
    date: '2 Ene 2024',
    readTime: '8 min'
  },
  {
    id: 7,
    title: 'El futuro de RAG: Tendencias para 2024',
    excerpt: 'Analizamos las tendencias emergentes en Retrieval-Augmented Generation y cómo prepararte para ellas.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
    category: 'Investigación',
    author: 'Carlos Mendoza',
    date: '28 Dic 2023',
    readTime: '7 min'
  }
];
