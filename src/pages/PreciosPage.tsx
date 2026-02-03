import { motion } from 'framer-motion';
import { 
  Check, 
  X,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { PRICING_PLANS, PRICING_FAQS } from '../data/pricing-plans';

export function PreciosPage() {
  const [isYearly, setIsYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Precios{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Transparentes
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Elige el plan que mejor se adapte a tu equipo. Sin costos ocultos, sin sorpresas.
            </p>
            
            {/* Toggle */}
            <div className="inline-flex items-center gap-4 p-1 bg-slate-800/50 rounded-xl">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  !isYearly ? 'bg-white text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                Mensual
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  isYearly ? 'bg-white text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                Anual
                <span className="px-2 py-0.5 bg-emerald-500 text-white text-xs rounded-full">
                  -20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/50' 
                    : 'bg-slate-900/50 border border-slate-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-medium rounded-full">
                      Más Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className={`inline-flex p-3 rounded-xl ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-red-500 to-orange-500' 
                      : 'bg-slate-800'
                  } mb-4`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="text-slate-400 mt-1">{plan.description}</p>
                </div>
                
                <div className="mb-8">
                  {plan.monthlyPrice ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-slate-400">/mes</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-white">Personalizado</div>
                  )}
                  {isYearly && plan.monthlyPrice && (
                    <p className="text-sm text-slate-500 mt-1">
                      Facturado anualmente (${(plan.yearlyPrice || 0) * 12}/año)
                    </p>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 shrink-0" />
                      )}
                      <span className={feature.included ? 'text-slate-300' : 'text-slate-500'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-500 hover:to-orange-500'
                    : 'bg-slate-800 text-white hover:bg-slate-700'
                }`}>
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Note */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿No estás seguro qué plan elegir?
            </h3>
            <p className="text-slate-400 mb-6">
              Nuestro equipo puede ayudarte a evaluar tus necesidades y encontrar el plan perfecto para tu caso de uso.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all">
              Agendar una Llamada
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Preguntas Frecuentes
            </h2>
          </motion.div>

          <div className="space-y-4">
            {PRICING_FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-slate-800 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between bg-slate-900/50 hover:bg-slate-900 transition-colors"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <div className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="p-6 pt-0 bg-slate-900/50">
                    <p className="text-slate-400">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
