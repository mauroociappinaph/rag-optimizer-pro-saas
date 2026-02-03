import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, CheckCircle, Building2, Users, Headphones, ArrowRight, Loader2 } from 'lucide-react';
import { CONTACT_REASONS as contactReasons, OFFICES as offices, FAQS as faqs } from '../data/contact';
import { OfficeCard } from '../components/contact/OfficeCard';

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
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold mb-6">
            Hablemos sobre tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Proyecto</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a optimizar tus pipelines RAG. Contáctanos y te responderemos pronto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input name="nombre" value={formData.nombre} onChange={handleChange} required className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3" placeholder="Nombre completo" />
                  <input name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3" placeholder="tu@empresa.com" />
                </div>
                <input name="empresa" value={formData.empresa} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3" placeholder="Empresa" />
                <select name="motivo" value={formData.motivo} onChange={handleChange} required className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3">
                  <option value="">Motivo de contacto</option>
                  {contactReasons.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                </select>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required rows={5} className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 resize-none" placeholder="Cuéntanos sobre tu proyecto..." />
                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-bold hover:opacity-90 flex items-center justify-center gap-2">
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <><Send className="w-5 h-5" /> Enviar Mensaje</>}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">¡Mensaje enviado!</h3>
                <button onClick={() => setIsSubmitted(false)} className="text-red-500 font-medium">Enviar otro</button>
              </div>
            )}
          </motion.div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Contacto directo</h2>
              <div className="space-y-4">
                <a href="mailto:hola@ragoptimizer.com" className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900">
                  <Mail className="text-red-500" /> <div><p className="text-sm text-gray-400">Email</p><p className="font-medium">hola@ragoptimizer.com</p></div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl">
                  <Clock className="text-green-500" /> <div><p className="text-sm text-gray-400">Horario</p><p className="font-medium">Lun - Vie, 9:00 - 18:00 (PST)</p></div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 text-center">
              <MessageSquare className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">¿Necesitas ayuda ahora?</h3>
              <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-bold">Chat en vivo</button>
            </div>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestras Oficinas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => <OfficeCard key={office.city} office={office} index={index} />)}
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}