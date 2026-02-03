import { Shield, BarChart, Settings, Target } from 'lucide-react';

export const COOKIE_TYPES = [
  {
    nombre: 'Cookies Esenciales',
    icon: Shield,
    descripcion: 'Necesarias para el funcionamiento básico del sitio. No pueden ser desactivadas.',
    ejemplos: ['Autenticación de sesión', 'Preferencias de seguridad', 'Balance de carga'],
    requerida: true,
    activa: true
  },
  {
    nombre: 'Cookies de Rendimiento',
    icon: BarChart,
    descripcion: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio.',
    ejemplos: ['Google Analytics', 'Métricas de página', 'Tiempos de carga'],
    requerida: false,
    activa: true
  },
  {
    nombre: 'Cookies Funcionales',
    icon: Settings,
    descripcion: 'Permiten funcionalidades mejoradas y personalización.',
    ejemplos: ['Preferencias de idioma', 'Región del usuario', 'Chat en vivo'],
    requerida: false,
    activa: true
  },
  {
    nombre: 'Cookies de Marketing',
    icon: Target,
    descripcion: 'Utilizadas para mostrar anuncios relevantes y medir campañas.',
    ejemplos: ['Remarketing', 'Seguimiento de conversiones', 'Redes sociales'],
    requerida: false,
    activa: false
  }
];

export const COOKIE_DETAILS = [
  {
    nombre: '__session',
    proveedor: 'RAGOptimizer',
    proposito: 'Mantener la sesión del usuario autenticado',
    expiracion: 'Sesión',
    tipo: 'Esencial'
  },
  {
    nombre: '_csrf',
    proveedor: 'RAGOptimizer',
    proposito: 'Protección contra ataques CSRF',
    expiracion: 'Sesión',
    tipo: 'Esencial'
  },
  {
    nombre: 'preferences',
    proveedor: 'RAGOptimizer',
    proposito: 'Almacenar preferencias del usuario',
    expiracion: '1 año',
    tipo: 'Funcional'
  },
  {
    nombre: '_ga',
    proveedor: 'Google Analytics',
    proposito: 'Distinguir usuarios únicos',
    expiracion: '2 años',
    tipo: 'Rendimiento'
  },
  {
    nombre: '_gid',
    proveedor: 'Google Analytics',
    proposito: 'Distinguir usuarios',
    expiracion: '24 horas',
    tipo: 'Rendimiento'
  },
  {
    nombre: '_gcl_au',
    proveedor: 'Google Ads',
    proposito: 'Seguimiento de conversiones',
    expiracion: '90 días',
    tipo: 'Marketing'
  },
  {
    nombre: 'hubspotutk',
    proveedor: 'HubSpot',
    proposito: 'Seguimiento de visitantes',
    expiracion: '13 meses',
    tipo: 'Marketing'
  },
  {
    nombre: 'intercom-id',
    proveedor: 'Intercom',
    proposito: 'Chat en vivo y soporte',
    expiracion: '9 meses',
    tipo: 'Funcional'
  }
];
