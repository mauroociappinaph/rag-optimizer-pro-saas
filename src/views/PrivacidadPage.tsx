'use client';

import { motion } from 'framer-motion';
import { Shield, Calendar, Mail } from 'lucide-react';

export function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] pt-20">
      {/* Hero */}
      <section className="py-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Política de Privacidad</h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Última actualización: 15 de Enero, 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-orange max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300">
                  En RAGOptimizer, nos tomamos muy en serio la privacidad de nuestros usuarios.
                  Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Información que Recopilamos</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Recopilamos los siguientes tipos de información:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Información de cuenta:</strong> Nombre, correo electrónico, empresa y cargo cuando te registras.</li>
                    <li><strong>Datos de uso:</strong> Métricas de uso del producto, logs de API, y patrones de interacción.</li>
                    <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador, sistema operativo y dispositivo.</li>
                    <li><strong>Datos de pago:</strong> Información de facturación procesada de forma segura por nuestros proveedores de pago.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Cómo Usamos tu Información</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Utilizamos la información recopilada para:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
                    <li>Procesar transacciones y enviar notificaciones relacionadas.</li>
                    <li>Enviar comunicaciones técnicas, actualizaciones y alertas de seguridad.</li>
                    <li>Responder a comentarios, preguntas y solicitudes de soporte.</li>
                    <li>Monitorear y analizar tendencias, uso y actividades.</li>
                    <li>Detectar, investigar y prevenir transacciones fraudulentas.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Datos de Pipeline RAG</h2>
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Compromiso de Privacidad de Datos</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>✓ <strong>No accedemos a tu contenido:</strong> Los documentos, embeddings y datos que procesas a través de RAGOptimizer permanecen privados.</li>
                    <li>✓ <strong>Aislamiento de datos:</strong> Cada cliente tiene su propio entorno aislado en Redis.</li>
                    <li>✓ <strong>Sin entrenamiento de modelos:</strong> No usamos tus datos para entrenar nuestros modelos de IA.</li>
                    <li>✓ <strong>Eliminación bajo demanda:</strong> Puedes solicitar la eliminación de todos tus datos en cualquier momento.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Compartir Información</h2>
                <div className="text-gray-300 space-y-4">
                  <p>No vendemos tu información personal. Podemos compartir información con:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Proveedores de servicios:</strong> Que nos ayudan a operar nuestro negocio (hosting, pagos, analytics).</li>
                    <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por ley o para proteger nuestros derechos.</li>
                    <li><strong>Transacciones corporativas:</strong> En caso de fusión, adquisición o venta de activos.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Seguridad de Datos</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Implementamos medidas de seguridad robustas:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cifrado en tránsito (TLS 1.3) y en reposo (AES-256).</li>
                    <li>Autenticación multifactor disponible para todas las cuentas.</li>
                    <li>Auditorías de seguridad regulares y pruebas de penetración.</li>
                    <li>Cumplimiento con SOC 2 Tipo II y GDPR.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Retención de Datos</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Retenemos tu información mientras tu cuenta esté activa o según sea necesario
                    para proporcionarte servicios. Puedes solicitar la eliminación de tu cuenta
                    y datos asociados en cualquier momento.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Tus Derechos</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Tienes derecho a:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Acceder a tu información personal.</li>
                    <li>Corregir datos inexactos.</li>
                    <li>Solicitar la eliminación de tus datos.</li>
                    <li>Oponerte al procesamiento de tus datos.</li>
                    <li>Exportar tus datos en un formato portátil.</li>
                    <li>Retirar tu consentimiento en cualquier momento.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Transferencias Internacionales</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Tus datos pueden ser transferidos y procesados en países fuera de tu país de
                    residencia. Nos aseguramos de que estas transferencias cumplan con las leyes
                    aplicables, incluyendo el uso de Cláusulas Contractuales Estándar de la UE.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Cambios a esta Política</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Podemos actualizar esta política ocasionalmente. Te notificaremos sobre cambios
                    significativos publicando la nueva política en esta página y, cuando sea apropiado,
                    enviándote una notificación por correo electrónico.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contacto</h2>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 mb-4">
                    Si tienes preguntas sobre esta política de privacidad, contáctanos:
                  </p>
                  <div className="flex items-center gap-2 text-orange-400">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:privacy@ragoptimizer.com" className="hover:underline">
                      privacy@ragoptimizer.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
