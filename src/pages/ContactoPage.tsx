import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, CheckCircle, Building2, Users, Headphones } from 'lucide-react';

const contactReasons = [
  { value: 'ventas', label: 'Consulta de Ventas', icon: Building2 },
  { value: 'soporte', label: 'Soporte Técnico', icon: Headphones },
  { value: 'partnership', label: 'Partnership', icon: Users },
  { value: 'prensa', label: 'Prensa y Medios', icon: MessageSquare },
  { value: 'otro', label: 'Otro', icon: Mail }
];

const offices = [
  {
    city: 'San Francisco',
    country: 'Estados Unidos',
    address: '100 Market Street, Suite 400',
    phone: '+1 (415) 555-0123',
    email: 'sf@ragoptimizer.com',
    isHQ: true
  },
  {
    city: 'Londres',
    country: 'Reino Unido',
    address: '25 Old Broad Street, EC2N 1HN',
    phone: '+44 20 7123 4567',
    email: 'london@ragoptimizer.com',
    isHQ: false
  },
  {
    city: 'São Paulo',
    country: 'Brasil',
    address: 'Av. Paulista, 1578 - Bela Vista',
    phone: '+55 11 3456-7890',
    email: 'brasil@ragoptimizer.com',
    isHQ: false
  }
];

const faqs = [
  {
    question: '¿Cuánto tiempo tarda en responder el equipo de ventas?',
    answer: 'Nuestro equipo de ventas responde en menos de 24 horas hábiles. Para consultas urgentes, usa el chat en vivo.'
  },
  {
    question: '¿Ofrecen demos personalizadas?',
    answer: 'Sí, ofrecemos demos personalizadas de 30-45 minutos donde mostramos cómo RAGOptimizer puede resolver tus casos de uso específicos.'
  },
  {
    question: '¿Tienen soporte en español?',
    answer: 'Sí, contamos con un equipo de soporte completo en español disponible de lunes a viernes de 9:00 a 18:00 (hora de Madrid).'
  },
  {
    question: '¿Cómo puedo reportar un bug o problema técnico?',
    answer: 'Puedes reportar problemas técnicos a través de nuestro portal de soporte, por email a support@ragoptimizer.com, o directamente desde el dashboard de la plataforma.'
  }
];

export function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    motivo: '',
    mensaje: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
            Hablemos sobre tu
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"> Proyecto</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Estamos aquí para ayudarte a optimizar tus pipelines RAG. 
            Contáctanos y te responderemos en menos de 24 horas.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8"
            >
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nombre completo *</label>
                        <input
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email corporativo *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                          placeholder="tu@empresa.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Empresa</label>
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Motivo de contacto *</label>
                      <select
                        name="motivo"
                        value={formData.motivo}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500"
                      >
                        <option value="">Selecciona una opción</option>
                        {contactReasons.map(reason => (
                          <option key={reason.value} value={reason.value}>
                            {reason.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Mensaje *</label>
                      <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 resize-none"
                        placeholder="Cuéntanos sobre tu proyecto o consulta..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar mensaje
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">¡Mensaje enviado!</h3>
                  <p className="text-gray-400 mb-6">
                    Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te responderá en menos de 24 horas hábiles.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ nombre: '', email: '', empresa: '', motivo: '', mensaje: '' });
                    }}
                    className="text-red-500 font-medium hover:text-red-400"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Contacto directo</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:hola@ragoptimizer.com"
                    className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email general</p>
                      <p className="font-medium group-hover:text-red-500 transition-colors">hola@ragoptimizer.com</p>
                    </div>
                  </a>
                  <a
                    href="tel:+14155550123"
                    className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Teléfono</p>
                      <p className="font-medium group-hover:text-orange-500 transition-colors">+1 (415) 555-0123</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Horario de atención</p>
                      <p className="font-medium">Lun - Vie, 9:00 - 18:00 (PST)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Chat CTA */}
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 text-center">
                <MessageSquare className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">¿Necesitas ayuda ahora?</h3>
                <p className="text-gray-400 mb-4">Nuestro equipo está disponible en el chat en vivo</p>
                <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Iniciar chat en vivo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Nuestras Oficinas</h2>
            <p className="text-gray-400">Presencia global para servir mejor a nuestros clientes</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <h3 className="text-xl font-bold">{office.city}</h3>
                  {office.isHQ && (
                    <span className="px-2 py-0.5 bg-red-500/20 text-red-500 text-xs font-medium rounded-full">
                      HQ
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-1">{office.country}</p>
                <p className="text-gray-400 text-sm mb-4">{office.address}</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400">{office.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400">{office.email}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-400">Respuestas rápidas a las consultas más comunes</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6"
              >
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
