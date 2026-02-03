import { Zap, Building2, Rocket } from 'lucide-react';
import { PricingPlan, FAQ } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Para equipos pequeños que comienzan con RAG',
    icon: Zap,
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      { text: 'Hasta 100K queries/mes', included: true },
      { text: '1 proyecto', included: true },
      { text: 'Embedding Auto-Selection', included: true },
      { text: 'Dashboard básico', included: true },
      { text: 'Semantic Caching', included: false },
      { text: 'Adaptive Chunking', included: false },
      { text: 'Reranking Automático', included: false },
      { text: 'Soporte prioritario', included: false },
      { text: 'SSO/SAML', included: false },
    ],
    cta: 'Comenzar Gratis',
    popular: false
  },
  {
    name: 'Pro',
    description: 'Para equipos en crecimiento con necesidades avanzadas',
    icon: Rocket,
    monthlyPrice: 399,
    yearlyPrice: 319,
    features: [
      { text: 'Hasta 1M queries/mes', included: true },
      { text: '5 proyectos', included: true },
      { text: 'Embedding Auto-Selection', included: true },
      { text: 'Dashboard avanzado', included: true },
      { text: 'Semantic Caching', included: true },
      { text: 'Adaptive Chunking', included: true },
      { text: 'Reranking Automático', included: true },
      { text: 'Soporte prioritario', included: false },
      { text: 'SSO/SAML', included: false },
    ],
    cta: 'Comenzar Prueba',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'Para organizaciones con requisitos enterprise',
    icon: Building2,
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      { text: 'Queries ilimitados', included: true },
      { text: 'Proyectos ilimitados', included: true },
      { text: 'Embedding Auto-Selection', included: true },
      { text: 'Dashboard con white-label', included: true },
      { text: 'Semantic Caching', included: true },
      { text: 'Adaptive Chunking', included: true },
      { text: 'Reranking Automático', included: true },
      { text: 'Soporte 24/7 dedicado', included: true },
      { text: 'SSO/SAML + RBAC', included: true },
    ],
    cta: 'Contactar Ventas',
    popular: false
  }
];

export const PRICING_FAQS: FAQ[] = [
  {
    question: '¿Qué incluye la prueba gratuita?',
    answer: 'La prueba gratuita de 14 días incluye acceso completo al plan Pro, sin necesidad de tarjeta de crédito.'
  },
  {
    question: '¿Puedo cambiar de plan en cualquier momento?',
    answer: 'Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplican inmediatamente.'
  },
  {
    question: '¿Cómo se calculan los queries?',
    answer: 'Un query es cualquier llamada a nuestro API de búsqueda vectorial. Operaciones de indexación no cuentan.'
  }
];