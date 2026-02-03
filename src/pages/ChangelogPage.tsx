import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Bug, 
  Zap, 
  Shield,
  ArrowUp,
  Tag,
  Calendar
} from 'lucide-react';
import { RELEASES } from '../data/changelog';

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'feature':
      return <Sparkles className="w-4 h-4 text-purple-400" />;
    case 'fix':
      return <Bug className="w-4 h-4 text-orange-400" />;
    case 'improvement':
      return <Zap className="w-4 h-4 text-blue-400" />;
    case 'security':
      return <Shield className="w-4 h-4 text-red-400" />;
    default:
      return <ArrowUp className="w-4 h-4 text-slate-400" />;
  }
};

const getTypeBadge = (type: string) => {
  switch (type) {
    case 'major':
      return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
    case 'minor':
      return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
    case 'patch':
      return 'bg-slate-700/50 text-slate-300 border border-slate-600';
    default:
      return 'bg-slate-700 text-slate-300';
  }
};

export function ChangelogPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-pink-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-6">
              <Tag className="w-4 h-4" />
              Changelog
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Historial de{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Versiones
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Mantente al día con las últimas mejoras, nuevas características y correcciones de RAG Optimizer Pro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subscribe Banner */}
      <section className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-slate-300">
                Recibe notificaciones de nuevas versiones directamente en tu email
              </p>
            </div>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="tu@email.com"
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500"
              />
              <button className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-500 transition-colors">
                Suscribir
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Changelog Timeline */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-slate-800" />

            <div className="space-y-12">
              {RELEASES.map((release, index) => (
                <motion.div
                  key={release.version}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    release.type === 'major' 
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                      : release.type === 'minor'
                      ? 'bg-blue-500/20 border-2 border-blue-500'
                      : 'bg-slate-800 border-2 border-slate-600'
                  }`}>
                    <span className="text-white font-bold text-sm">
                      {release.version.split('.')[0]}.{release.version.split('.')[1]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-white">v{release.version}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeBadge(release.type)}`}>
                        {release.type === 'major' ? 'Major' : release.type === 'minor' ? 'Minor' : 'Patch'}
                      </span>
                      <span className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        {release.date}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {release.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {getTypeIcon(item.type)}
                          <span className="text-slate-300">{item.text}</span>
                        </li>
                      ))}
                    </ul>

                    {release.type !== 'patch' && (
                      <div className="mt-6 pt-4 border-t border-slate-800">
                        <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                          Ver notas completas →
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-slate-800 text-white font-medium rounded-xl hover:bg-slate-700 transition-colors">
              Cargar versiones anteriores
            </button>
          </div>
        </div>
      </section>

      {/* Semantic Versioning Note */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Sobre nuestro versionado</h3>
            <p className="text-slate-400 mb-6">
              Seguimos <a href="#" className="text-purple-400 hover:underline">Semantic Versioning 2.0.0</a>. 
              Esto significa:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-sm font-mono rounded">MAJOR</span>
                </div>
                <p className="text-sm text-slate-400">
                  Cambios incompatibles con versiones anteriores. Revisa la guía de migración.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm font-mono rounded">MINOR</span>
                </div>
                <p className="text-sm text-slate-400">
                  Nuevas características que son compatibles hacia atrás.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-slate-600/50 text-slate-300 text-sm font-mono rounded">PATCH</span>
                </div>
                <p className="text-sm text-slate-400">
                  Correcciones de bugs compatibles hacia atrás.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
