import { motion } from 'framer-motion';
import { Users, MessageSquare, Github, Twitter, Linkedin, Youtube, Calendar, Trophy, ArrowRight, ExternalLink, Heart, Star, BookOpen } from 'lucide-react';

const canales = [
  {
    nombre: 'Discord',
    descripcion: 'Únete a más de 5,000 desarrolladores discutiendo RAG, Redis y optimización de IA.',
    icon: MessageSquare,
    color: 'from-indigo-500 to-purple-500',
    link: '#',
    miembros: '5,234',
    activo: true
  },
  {
    nombre: 'GitHub',
    descripcion: 'Contribuye al código, reporta issues y explora ejemplos open source.',
    icon: Github,
    color: 'from-gray-600 to-gray-800',
    link: '#',
    miembros: '2,100',
    activo: true
  },
  {
    nombre: 'Twitter/X',
    descripcion: 'Síguenos para las últimas noticias, tips y anuncios de producto.',
    icon: Twitter,
    color: 'from-blue-400 to-blue-600',
    link: '#',
    miembros: '12K',
    activo: true
  },
  {
    nombre: 'LinkedIn',
    descripcion: 'Conecta con profesionales de IA y mantente al día con artículos técnicos.',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-800',
    link: '#',
    miembros: '8,500',
    activo: true
  },
  {
    nombre: 'YouTube',
    descripcion: 'Tutoriales en video, demos de producto y grabaciones de eventos.',
    icon: Youtube,
    color: 'from-red-500 to-red-700',
    link: '#',
    miembros: '3,200',
    activo: true
  }
];

const eventos = [
  {
    tipo: 'Webinar',
    titulo: 'Optimizando RAG para Enterprise: Mejores Prácticas',
    fecha: '15 Feb 2025',
    hora: '10:00 AM PST',
    speakers: ['María García', 'John Smith'],
    registrados: 342
  },
  {
    tipo: 'Workshop',
    titulo: 'Hands-on: Implementando Semantic Cache con Redis',
    fecha: '22 Feb 2025',
    hora: '2:00 PM PST',
    speakers: ['Alex Chen'],
    registrados: 156
  },
  {
    tipo: 'Meetup',
    titulo: 'RAG Community Meetup - San Francisco',
    fecha: '1 Mar 2025',
    hora: '6:00 PM PST',
    speakers: ['Comunidad'],
    registrados: 89
  },
  {
    tipo: 'Conference',
    titulo: 'RAGCon 2025 - Annual Conference',
    fecha: '15-17 Abr 2025',
    hora: 'Todo el día',
    speakers: ['50+ Speakers'],
    registrados: 1200
  }
];

const contribuidores = [
  { nombre: 'Sarah Chen', avatar: '👩‍💻', contribuciones: 127, pais: '🇺🇸' },
  { nombre: 'Miguel Santos', avatar: '👨‍💻', contribuciones: 98, pais: '🇪🇸' },
  { nombre: 'Yuki Tanaka', avatar: '👩‍🔬', contribuciones: 85, pais: '🇯🇵' },
  { nombre: 'Hans Mueller', avatar: '🧑‍💻', contribuciones: 72, pais: '🇩🇪' },
  { nombre: 'Priya Sharma', avatar: '👩‍🎓', contribuciones: 68, pais: '🇮🇳' },
  { nombre: 'Lucas Silva', avatar: '👨‍🎓', contribuciones: 54, pais: '🇧🇷' }
];

const recursos = [
  {
    titulo: 'RAG Best Practices Guide',
    tipo: 'PDF Guide',
    descargas: '12K+',
    icon: BookOpen
  },
  {
    titulo: 'Semantic Cache Cheatsheet',
    tipo: 'Cheatsheet',
    descargas: '8K+',
    icon: BookOpen
  },
  {
    titulo: 'Embedding Selection Flowchart',
    tipo: 'Diagram',
    descargas: '5K+',
    icon: BookOpen
  }
];

export function ComunidadPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] pt-20">
      {/* Hero */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">Comunidad Global</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Únete a la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Comunidad RAG
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Más de 20,000 desarrolladores, científicos de datos e ingenieros de ML 
              colaborando para optimizar aplicaciones de IA.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">20K+</div>
                <div className="text-sm text-gray-400">Miembros</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-sm text-gray-400">Países</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5K+</div>
                <div className="text-sm text-gray-400">Contribuciones</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-sm text-gray-400">Eventos/año</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Canales */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Conéctate con Nosotros</h2>
            <p className="text-gray-400">Elige tu plataforma favorita para unirte a la conversación</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMUNITY_CHANNELS.map((canal, index) => (
              <motion.a
                key={canal.nombre}
                href={canal.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${canal.color} flex items-center justify-center`}>
                    <canal.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400">{canal.miembros}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {canal.nombre}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{canal.descripcion}</p>
                <div className="flex items-center text-purple-400 text-sm font-medium">
                  <span>Unirse</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Próximos Eventos</h2>
              <p className="text-gray-400">Webinars, workshops y meetups de la comunidad</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
              Ver todos los eventos
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {COMMUNITY_EVENTS.map((evento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400">
                    {evento.tipo}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{evento.registrados} registrados</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {evento.titulo}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{evento.fecha}</span>
                  </div>
                  <span>•</span>
                  <span>{evento.hora}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Speakers:</span>
                    <span className="text-sm text-gray-300">{evento.speakers.join(', ')}</span>
                  </div>
                  <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-medium hover:bg-purple-500/30 transition-colors">
                    Registrarse
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Contribuidores */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">Hall of Fame</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Top Contribuidores</h2>
            <p className="text-gray-400">Reconocemos a quienes hacen grande nuestra comunidad</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {contribuidores.map((contrib, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-yellow-500/50 transition-all"
              >
                <div className="text-4xl mb-2">{contrib.avatar}</div>
                <div className="text-sm font-medium text-white mb-1">{contrib.nombre}</div>
                <div className="text-xs text-gray-500 mb-2">{contrib.pais}</div>
                <div className="flex items-center justify-center gap-1 text-yellow-400">
                  <Star className="w-3 h-3" />
                  <span className="text-xs font-medium">{contrib.contribuciones}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos Gratuitos */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Recursos Gratuitos</h2>
            <p className="text-gray-400">Materiales creados por la comunidad para la comunidad</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recursos.map((recurso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all group cursor-pointer"
              >
                <recurso.icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {recurso.titulo}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{recurso.tipo}</span>
                  <span className="text-sm text-gray-400">{recurso.descargas} descargas</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-12"
          >
            <Heart className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Construyamos juntos el futuro del RAG
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Ya sea que quieras hacer preguntas, compartir conocimiento o contribuir código, 
              hay un lugar para ti en nuestra comunidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageSquare className="w-5 h-5" />
                Unirse a Discord
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5" />
                Contribuir en GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
