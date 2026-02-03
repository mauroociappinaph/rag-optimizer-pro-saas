import { Award, FileCheck, Shield, Lock, Key, Server, Eye } from 'lucide-react';

export const SECURITY_CERTIFICATIONS = [
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

export const SECURITY_MEASURES = [
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

export const SECURITY_PRACTICES = [
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
