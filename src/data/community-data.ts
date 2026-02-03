import { MessageSquare, Github, Twitter, Linkedin, Youtube } from 'lucide-react';
import { CommunityChannel, CommunityEvent } from '../types';

export const COMMUNITY_CHANNELS: CommunityChannel[] = [
  {
    nombre: 'Discord',
    descripcion: 'Únete a más de 5,000 desarrolladores discutiendo RAG y optimización.',
    icon: MessageSquare,
    color: 'from-indigo-500 to-purple-500',
    link: '#',
    miembros: '5,234',
    activo: true
  },
  {
    nombre: 'GitHub',
    descripcion: 'Contribuye al código y explora ejemplos open source.',
    icon: Github,
    color: 'from-gray-600 to-gray-800',
    link: '#',
    miembros: '2,100',
    activo: true
  }
];

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    tipo: 'Webinar',
    titulo: 'Optimizando RAG para Enterprise: Mejores Prácticas',
    fecha: '15 Feb 2025',
    hora: '10:00 AM PST',
    speakers: ['María García', 'John Smith'],
    registrados: 342
  }
];
