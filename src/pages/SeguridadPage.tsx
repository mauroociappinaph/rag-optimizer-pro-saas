import { motion } from 'framer-motion';
import { Shield, Lock, Key, Server, Eye, FileCheck, AlertTriangle, CheckCircle, Award, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const certificaciones = [
  {
    nombre: 'SOC 2 Type II',
    descripcion: 'Auditoría anual de controles de seguridad, disponibilidad y confidencialidad.',
    icon: Award,
    estado: 'Certificado'
  },
  {
    nombre: 'GDPR',
    descripcion: 'Cumplimiento completo con el Reglamento General de Protección de Datos de la UE.',
    icon: FileCheck,
    estado: 'Cumplimiento'
  },
  {
    nombre: 'ISO 27001',
    descripcion: 'Sistema de gestión de seguridad de la información certificado.',
    icon: Shield,
    estado: 'Certificado'
  },
  {
    nombre: 'HIPAA',
    descripcion: 'Controles disponibles para clientes del sector salud (BAA disponible).',
    icon: Lock,
    estado: 'Disponible'
  }
];

const medidasSeguridad = [
  {
    categoria: 'Cifrado',
    icon: Lock,
    items: [
      { titulo: 'Cifrado en tránsito', descripcion: 'TLS 1.3 para todas las comunicaciones', activo: true },
      { titulo: 'Cifrado en reposo', descripcion: 'AES-256 para datos almacenados', activo: true },
      { titulo: 'Cifrado de backups', descripcion: 'Backups cifrados en ubicaciones geo-distribuidas', activo: true },
      { titulo: 'Key Management', descripcion: 'Rotación automática de claves cada 90 días', activo: true }
    ]
  },
  {
    categoria: 'Autenticación',
    icon: Key,
    items: [
      { titulo: 'MFA', descripcion: 'Autenticación multifactor con TOTP o hardware keys', activo: true },
      { titulo: 'SSO', descripcion: 'Integración con SAML 2.0 y OIDC', activo: true },
      { titulo: 'API Keys', descripcion: 'Claves API con scopes granulares y expiración', activo: true },
      { titulo: 'Session Management', descripcion: 'Timeouts configurables y revocación de sesiones', activo: true }
    ]
  },
  {
    categoria: 'Infraestructura',
    icon: Server,
    items: [
      { titulo: 'Aislamiento de datos', descripcion: 'Cada cliente en su propio namespace Redis', activo: true },
      { titulo: 'WAF', descripcion: 'Web Application Firewall con reglas actualizadas', activo: true },
      { titulo: 'DDoS Protection', descripcion: 'Mitigación automática de ataques volumétricos', activo: true },
      { titulo: 'Network Segmentation', descripcion: 'VPCs aisladas con security groups estrictos', activo: true }
    ]
  },
  {
    categoria: 'Monitoreo',
    icon: Eye,
    items: [
      { titulo: 'SIEM', descripcion: 'Agregación y correlación de logs de seguridad 24/7', activo: true },
      { titulo: 'Alertas', descripcion: 'Notificaciones en tiempo real de eventos anómalos', activo: true },
      { titulo: 'Audit Logs', descripcion: 'Registro inmutable de todas las acciones administrativas', activo: true },
      { titulo: 'Threat Detection', descripcion: 'Detección de comportamiento malicioso con ML', activo: true }
    ]
  }
];

const practicas = [
  {
    titulo: 'Pruebas de Penetración',
    descripcion: 'Pruebas de seguridad realizadas trimestralmente por terceros independientes.',
    frecuencia: 'Trimestral'
  },
  {
    titulo: 'Análisis de Vulnerabilidades',
    descripcion: 'Escaneo continuo de dependencias y código con remediación prioritaria.',
    frecuencia: 'Continuo'
  },
  {
    titulo: 'Bug Bounty Program',
    descripcion: 'Programa de recompensas para investigadores de seguridad.',
    frecuencia: 'Permanente'
  },
  {
    titulo: 'Capacitación de Empleados',
    descripcion: 'Entrenamiento obligatorio en seguridad para todo el personal.',
    frecuencia: 'Anual'
  },
  {
    titulo: 'Revisión de Código',
    descripcion: 'Revisión de seguridad obligatoria para todos los cambios de código.',
    frecuencia: 'Por PR'
  },
  {
    titulo: 'Incident Response',
    descripcion: 'Plan de respuesta a incidentes probado con simulacros regulares.',
    frecuencia: 'Semestral'
  }
];

export function SeguridadPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Seguridad Enterprise</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tu Seguridad es{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                Nuestra Prioridad
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              RAGOptimizer está diseñado desde cero con seguridad enterprise-grade. 
              Protegemos tus datos con los más altos estándares de la industria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Certificaciones y Cumplimiento</h2>
            <p className="text-gray-400">Validados por auditores independientes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificaciones.map((cert, index) => (
              <motion.div
                key={cert.nombre}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-green-500/50 transition-all"
              >
                <cert.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{cert.nombre}</h3>
                <p className="text-sm text-gray-400 mb-4">{cert.descripcion}</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                  <CheckCircle className="w-3 h-3" />
                  {cert.estado}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medidas de Seguridad */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Medidas de Seguridad</h2>
            <p className="text-gray-400">Capas de protección para tus datos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {medidasSeguridad.map((categoria, index) => (
              <motion.div
                key={categoria.categoria}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <categoria.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{categoria.categoria}</h3>
                </div>
                <div className="space-y-4">
                  {categoria.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">{item.titulo}</div>
                        <div className="text-sm text-gray-400">{item.descripcion}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prácticas de Seguridad */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Prácticas de Seguridad</h2>
            <p className="text-gray-400">Procesos continuos para mantener la seguridad</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicas.map((practica, index) => (
              <motion.div
                key={practica.titulo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">{practica.titulo}</h3>
                  <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                    {practica.frecuencia}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{practica.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reportar Vulnerabilidad */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-16 h-16 text-yellow-400" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-3">Reportar una Vulnerabilidad</h2>
                <p className="text-gray-400 mb-6">
                  Si descubres una vulnerabilidad de seguridad, por favor repórtala de manera 
                  responsable. Ofrecemos recompensas a través de nuestro programa Bug Bounty.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="mailto:security@ragoptimizer.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                  >
                    security@ragoptimizer.com
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
                  >
                    Bug Bounty Program
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Tienes preguntas sobre seguridad?</h2>
          <p className="text-gray-400 mb-8">
            Nuestro equipo de seguridad está disponible para discutir tus requisitos específicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Hablar con Seguridad
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Descargar Security Whitepaper
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
