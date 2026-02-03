import { Heart, Laptop, DollarSign, Plane, GraduationCap, Coffee, Zap, Users, Briefcase, MapPin, Clock } from 'lucide-react';

export const JOB_DEPARTMENTS = ['Todos', 'Ingeniería', 'Producto', 'Ventas', 'Marketing', 'Operaciones'];

export const JOB_BENEFITS = [
  { icon: Heart, title: 'Seguro Médico Premium', description: 'Cobertura completa para ti y tu familia' },
  { icon: Laptop, title: 'Trabajo Remoto', description: 'Flexibilidad total, trabaja desde donde quieras' },
  { icon: DollarSign, title: 'Equity', description: 'Participación en el éxito de la empresa' },
  { icon: Plane, title: '25 Días de Vacaciones', description: 'Además de días festivos locales' },
  { icon: GraduationCap, title: 'Desarrollo Profesional', description: '$3,000/año para cursos y conferencias' },
  { icon: Coffee, title: 'Snacks y Bebidas', description: 'Oficinas equipadas con todo lo necesario' },
  { icon: Zap, title: 'Equipamiento Top', description: 'MacBook Pro M3 + monitor 4K + accesorios' },
  { icon: Users, title: 'Team Building', description: 'Retiros trimestrales y eventos de equipo' }
];

export const JOBS = [
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
