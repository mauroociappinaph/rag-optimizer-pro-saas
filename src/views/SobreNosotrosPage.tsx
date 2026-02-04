'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Globe, Zap, Shield } from 'lucide-react';

const team = [
  {
    name: 'Carlos Mendoza',
    role: 'CEO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    bio: 'Ex-Google, 15 años en ML/AI',
    linkedin: '#'
  },
  {
    name: 'María García',
    role: 'CTO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    bio: 'Ex-Redis Labs, experta en sistemas distribuidos',
    linkedin: '#'
  },
  {
    name: 'David Chen',
    role: 'VP of Engineering',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    bio: 'Ex-OpenAI, arquitecto de pipelines ML',
    linkedin: '#'
  },
  {
    name: 'Ana Rodríguez',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    bio: 'Ex-Databricks, especialista en UX para ML',
    linkedin: '#'
  },
  {
    name: 'Roberto Silva',
    role: 'Head of AI Research',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    bio: 'PhD MIT, investigador en NLP',
    linkedin: '#'
  },
  {
    name: 'Laura Martinez',
    role: 'VP of Sales',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
    bio: 'Ex-Snowflake, 10 años en enterprise sales',
    linkedin: '#'
  }
];

const values = [
  {
    icon: Zap,
    title: 'Innovación Continua',
    description: 'Nunca dejamos de explorar nuevas formas de optimizar y mejorar los pipelines RAG.'
  },
  {
    icon: Users,
    title: 'Cliente Primero',
    description: 'Cada decisión que tomamos está orientada a resolver los problemas reales de nuestros usuarios.'
  },
  {
    icon: Shield,
    title: 'Confianza y Transparencia',
    description: 'Construimos relaciones duraderas basadas en la honestidad y la integridad.'
  },
  {
    icon: Heart,
    title: 'Pasión por la Excelencia',
    description: 'Nos esforzamos por entregar productos de la más alta calidad en todo momento.'
  }
];

const milestones = [
  { year: '2021', title: 'Fundación', description: 'RAGOptimizer nace en San Francisco' },
  { year: '2022', title: 'Seed Round', description: '$5M de Sequoia Capital' },
  { year: '2023', title: 'Series A', description: '$25M liderado por a16z' },
  { year: '2024', title: 'Expansión Global', description: '500+ clientes enterprise' }
];

export function SobreNosotrosPage() {
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
            Construyendo el Futuro de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"> RAG</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Somos un equipo de ingenieros, científicos de datos y emprendedores
            apasionados por democratizar el acceso a tecnología de IA de clase mundial.
          </motion.p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Eliminar la complejidad del tuning manual en pipelines RAG, permitiendo que
                equipos de cualquier tamaño puedan construir aplicaciones de IA precisas,
                eficientes y rentables sin necesidad de expertise especializado.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-orange-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Ser la plataforma estándar de la industria para optimización de RAG,
                impulsando la próxima generación de aplicaciones de IA que transformarán
                cómo las empresas interactúan con su conocimiento.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-gray-400 text-lg">De una idea a líder del mercado</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className={`bg-gray-800/50 border border-gray-700 rounded-xl p-6 inline-block ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <span className="text-red-500 font-bold text-xl">{milestone.year}</span>
                      <h3 className="text-xl font-bold mt-1">{milestone.title}</h3>
                      <p className="text-gray-400 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-red-500 rounded-full border-4 border-gray-950 mx-4" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-gray-400 text-lg">Los principios que guían cada decisión</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-red-500/50 transition-colors"
              >
                <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-gray-400 text-lg">Líderes con experiencia en las mejores empresas del mundo</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-red-500/50 transition-all group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-700 group-hover:border-red-500/50 transition-colors"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-red-500 font-medium">{member.role}</p>
                <p className="text-gray-400 text-sm mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: '500+', label: 'Clientes Enterprise' },
              { icon: Globe, value: '40+', label: 'Países' },
              { icon: Award, value: '$50M+', label: 'Financiación Total' },
              { icon: Zap, value: '10B+', label: 'Queries Optimizados' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
