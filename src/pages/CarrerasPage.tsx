import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Clock, DollarSign, ChevronDown, ChevronUp, Heart, Zap, Users, Globe, Coffee, Laptop, Plane, GraduationCap } from 'lucide-react';

const departments = ['Todos', 'Ingeniería', 'Producto', 'Ventas', 'Marketing', 'Operaciones'];

const benefits = [
  { icon: Heart, title: 'Seguro Médico Premium', description: 'Cobertura completa para ti y tu familia' },
  { icon: Laptop, title: 'Trabajo Remoto', description: 'Flexibilidad total, trabaja desde donde quieras' },
  { icon: DollarSign, title: 'Equity', description: 'Participación en el éxito de la empresa' },
  { icon: Plane, title: '25 Días de Vacaciones', description: 'Además de días festivos locales' },
  { icon: GraduationCap, title: 'Desarrollo Profesional', description: '$3,000/año para cursos y conferencias' },
  { icon: Coffee, title: 'Snacks y Bebidas', description: 'Oficinas equipadas con todo lo necesario' },
  { icon: Zap, title: 'Equipamiento Top', description: 'MacBook Pro M3 + monitor 4K + accesorios' },
  { icon: Users, title: 'Team Building', description: 'Retiros trimestrales y eventos de equipo' }
];

const jobs = [
  {
    id: 1,
    title: 'Senior ML Engineer',
    department: 'Ingeniería',
    location: 'Remoto (Global)',
    type: 'Full-time',
    salary: '$150k - $200k',
    description: 'Buscamos un ingeniero senior de ML para liderar el desarrollo de nuestros modelos de optimización automática.',
    requirements: [
      '5+ años de experiencia en Machine Learning',
      'Experiencia con PyTorch o TensorFlow',
      'Conocimiento profundo de NLP y embeddings',
      'Experiencia con sistemas distribuidos',
      'Inglés fluido'
    ],
    niceToHave: [
      'Experiencia con Redis y bases de datos vectoriales',
      'Publicaciones en conferencias top (NeurIPS, ICML, ACL)',
      'Contribuciones a proyectos open source'
    ]
  },
  {
    id: 2,
    title: 'Backend Engineer (Python)',
    department: 'Ingeniería',
    location: 'Remoto (Américas)',
    type: 'Full-time',
    salary: '$120k - $160k',
    description: 'Únete a nuestro equipo de backend para construir APIs escalables y sistemas de procesamiento en tiempo real.',
    requirements: [
      '3+ años de experiencia con Python',
      'Experiencia con FastAPI o Flask',
      'Conocimiento de Redis, PostgreSQL',
      'Experiencia con Docker y Kubernetes',
      'Inglés fluido'
    ],
    niceToHave: [
      'Experiencia con pipelines de datos',
      'Conocimiento de arquitecturas event-driven',
      'Experiencia con AWS o GCP'
    ]
  },
  {
    id: 3,
    title: 'Frontend Engineer (React)',
    department: 'Ingeniería',
    location: 'Remoto (Europa)',
    type: 'Full-time',
    salary: '$100k - $140k',
    description: 'Construye interfaces de usuario excepcionales para nuestro dashboard de observabilidad.',
    requirements: [
      '3+ años de experiencia con React',
      'TypeScript avanzado',
      'Experiencia con visualización de datos (D3, Chart.js)',
      'Conocimiento de testing (Jest, Cypress)',
      'Inglés fluido'
    ],
    niceToHave: [
      'Experiencia con dashboards en tiempo real',
      'Conocimiento de WebSockets',
      'Background en UX/UI'
    ]
  },
  {
    id: 4,
    title: 'Product Manager',
    department: 'Producto',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$140k - $180k',
    description: 'Lidera la estrategia de producto para nuestra plataforma de optimización RAG.',
    requirements: [
      '4+ años de experiencia como PM en productos B2B SaaS',
      'Background técnico (ingeniería o similar)',
      'Experiencia con productos de ML/AI',
      'Excelentes habilidades de comunicación',
      'Inglés nativo'
    ],
    niceToHave: [
      'Experiencia en startups de alto crecimiento',
      'Conocimiento de LLMs y RAG',
      'MBA'
    ]
  },
  {
    id: 5,
    title: 'Enterprise Account Executive',
    department: 'Ventas',
    location: 'Nueva York, NY',
    type: 'Full-time',
    salary: '$130k - $170k + comisiones',
    description: 'Impulsa el crecimiento enterprise cerrando deals de alto valor.',
    requirements: [
      '5+ años vendiendo software B2B enterprise',
      'Track record de $1M+ ARR',
      'Experiencia en venta de productos técnicos',
      'Red de contactos en Fortune 500',
      'Inglés nativo'
    ],
    niceToHave: [
      'Experiencia vendiendo productos de AI/ML',
      'Background técnico',
      'Experiencia en startups'
    ]
  },
  {
    id: 6,
    title: 'DevRel / Developer Advocate',
    department: 'Marketing',
    location: 'Remoto (Global)',
    type: 'Full-time',
    salary: '$110k - $150k',
    description: 'Construye y nutre nuestra comunidad de desarrolladores.',
    requirements: [
      '3+ años de experiencia como desarrollador',
      'Experiencia creando contenido técnico (blogs, videos, talks)',
      'Presencia activa en comunidades de desarrollo',
      'Excelentes habilidades de presentación',
      'Inglés fluido'
    ],
    niceToHave: [
      'Experiencia con LLMs, RAG, o ML',
      'Seguidores en redes sociales técnicas',
      'Speaker en conferencias'
    ]
  }
];

export function CarrerasPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('Todos');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const filteredJobs = jobs.filter(job => 
    selectedDepartment === 'Todos' || job.department === selectedDepartment
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Únete a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"> RAGOptimizer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Estamos construyendo el futuro de la optimización de IA. 
            Buscamos personas talentosas y apasionadas para unirse a nuestro equipo global.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-8 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-red-500" />
              <span>50+ empleados</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-red-500" />
              <span>15 países</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-red-500" />
              <span>Serie A ($25M)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">¿Por qué RAGOptimizer?</h2>
            <p className="text-gray-400 text-lg">Beneficios diseñados para tu bienestar y crecimiento</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Posiciones Abiertas</h2>
            <p className="text-gray-400 text-lg">Encuentra tu próximo desafío profesional</p>
          </motion.div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedDepartment === dept
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-red-500/50 transition-colors"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-red-500/20 text-red-500 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                      {expandedJob === job.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 border-t border-gray-700"
                  >
                    <div className="pt-6">
                      <p className="text-gray-300 mb-6">{job.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-bold mb-3 text-red-500">Requisitos</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-400">
                                <span className="text-green-500 mt-1">✓</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-3 text-orange-500">Nice to Have</h4>
                          <ul className="space-y-2">
                            {job.niceToHave.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-400">
                                <span className="text-orange-500 mt-1">+</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                        Aplicar Ahora
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No hay posiciones abiertas en este departamento actualmente.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿No encuentras tu posición ideal?</h2>
          <p className="text-gray-400 mb-8">
            Siempre estamos buscando talento excepcional. Envíanos tu CV y te contactaremos cuando haya una oportunidad que encaje contigo.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-semibold hover:opacity-90 transition-opacity">
            Enviar Aplicación Espontánea
          </button>
        </div>
      </section>
    </div>
  );
}
