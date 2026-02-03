import { Building2, Headphones, Users, MessageSquare, Mail } from 'lucide-react';

export const CONTACT_REASONS = [
  { value: 'ventas', label: 'Consulta de Ventas', icon: Building2 },
  { value: 'soporte', label: 'Soporte Técnico', icon: Headphones },
  { value: 'partnership', label: 'Partnership', icon: Users },
  { value: 'prensa', label: 'Prensa y Medios', icon: MessageSquare },
  { value: 'otro', label: 'Otro', icon: Mail }
];

export const OFFICES = [
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

export const FAQS = [
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
