import { MessageSquare, Github, Twitter, Linkedin, Youtube, BookOpen } from 'lucide-react';
import { CommunityChannel, CommunityEvent, CommunityContributor, CommunityResource } from '../types';

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

export const COMMUNITY_EVENTS: CommunityEvent[] = [
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

export const COMMUNITY_CONTRIBUTORS: CommunityContributor[] = [
  { nombre: 'Sarah Chen', avatar: '👩‍💻', contribuciones: 127, pais: '🇺🇸' },
  { nombre: 'Miguel Santos', avatar: '👨‍💻', contribuciones: 98, pais: '🇪🇸' },
  { nombre: 'Yuki Tanaka', avatar: '👩‍🔬', contribuciones: 85, pais: '🇯🇵' },
  { nombre: 'Hans Mueller', avatar: '🧑‍💻', contribuciones: 72, pais: '🇩🇪' },
  { nombre: 'Priya Sharma', avatar: '👩‍🎓', contribuciones: 68, pais: '🇮🇳' },
  { nombre: 'Lucas Silva', avatar: '👨‍🎓', contribuciones: 54, pais: '🇧🇷' }
];

export const COMMUNITY_RESOURCES: CommunityResource[] = [
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
