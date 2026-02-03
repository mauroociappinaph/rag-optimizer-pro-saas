import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import { CATEGORIES, FEATURED_POST, BLOG_POSTS } from '../data/blog';

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post => {
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog de<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"> RAGOptimizer</span></h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Tutoriales, casos de uso e investigación sobre pipelines RAG</p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text" placeholder="Buscar artículos..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-red-500" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map(category => (
                <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}>{category}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden group hover:border-red-500/50 transition-colors">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-auto">
                <img src={FEATURED_POST.image} alt={FEATURED_POST.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 left-4"><span className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">Destacado</span></div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4"><Tag className="w-4 h-4 text-red-500" /><span className="text-red-500 font-medium">{FEATURED_POST.category}</span></div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-red-500 transition-colors">{FEATURED_POST.title}</h2>
                <p className="text-gray-400 mb-6">{FEATURED_POST.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={FEATURED_POST.authorImage} alt={FEATURED_POST.author} className="w-10 h-10 rounded-full" />
                    <div><p className="font-medium">{FEATURED_POST.author}</p><div className="flex items-center gap-3 text-sm text-gray-400"><span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{FEATURED_POST.date}</span><span className="flex items-center gap-1"><Clock className="w-4 h-4" />{FEATURED_POST.readTime}</span></div></div>
                  </div>
                  <button className="flex items-center gap-2 text-red-500 font-medium hover:gap-3 transition-all">Leer más <ArrowRight className="w-4 h-4" /></button>
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
              <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden group hover:border-red-500/50 transition-colors">
                <div className="relative h-48"><img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /><div className="absolute top-4 left-4"><span className="bg-gray-900/80 text-white text-xs font-medium px-3 py-1 rounded-full">{post.category}</span></div></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-red-500 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-400"><User className="w-4 h-4" /><span>{post.author}</span></div>
                    <div className="flex items-center gap-3 text-gray-400"><span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span><span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span></div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="text-center mt-12"><button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium transition-colors">Cargar más artículos</button></div>
        </div>
      </section>
    </div>
  );
}