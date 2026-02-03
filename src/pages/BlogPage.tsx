import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';

const categories = ['Todos', 'Tutoriales', 'Casos de Uso', 'Actualizaciones', 'Investigación', 'Mejores Prácticas'];

const featuredPost = {
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

const posts = [
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

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      
      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Blog de
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"> RAGOptimizer</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tutoriales, casos de uso, investigación y las últimas novedades sobre optimización de pipelines RAG
            </p>
          </motion.div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden group hover:border-red-500/50 transition-colors"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                    Destacado
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-red-500" />
                  <span className="text-red-500 font-medium">{featuredPost.category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-red-500 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.authorImage}
                      alt={featuredPost.author}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{featuredPost.author}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-red-500 font-medium hover:gap-3 transition-all">
                    Leer más <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden group hover:border-red-500/50 transition-colors"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-900/80 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-red-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No se encontraron artículos que coincidan con tu búsqueda.</p>
            </div>
          )}

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium transition-colors">
              Cargar más artículos
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Suscríbete a nuestro Newsletter</h2>
          <p className="text-gray-400 mb-8">
            Recibe las últimas novedades, tutoriales y consejos directamente en tu bandeja de entrada.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
