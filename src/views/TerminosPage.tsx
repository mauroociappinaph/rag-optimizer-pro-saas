'use client';

import { motion } from 'framer-motion';
import { FileText, Calendar, Mail } from 'lucide-react';

export function TerminosPage() {
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
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Términos de Servicio</h1>
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
                  Bienvenido a RAGOptimizer. Al acceder o utilizar nuestros servicios, aceptas
                  estos Términos de Servicio. Por favor, léelos cuidadosamente.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Al crear una cuenta o utilizar los servicios de RAGOptimizer, aceptas estar
                    vinculado por estos Términos de Servicio, nuestra Política de Privacidad y
                    cualquier término adicional aplicable a funciones específicas.
                  </p>
                  <p>
                    Si estás utilizando los servicios en nombre de una organización, aceptas estos
                    términos en nombre de esa organización y confirmas que tienes autoridad para hacerlo.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Descripción del Servicio</h2>
                <div className="text-gray-300 space-y-4">
                  <p>RAGOptimizer proporciona:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Plataforma SaaS para optimización de pipelines RAG (Retrieval-Augmented Generation).</li>
                    <li>Motor de IA para selección automática de embeddings, caching semántico, chunking adaptativo y reranking.</li>
                    <li>APIs para integración con aplicaciones de terceros.</li>
                    <li>Dashboard de observabilidad y métricas en tiempo real.</li>
                    <li>Integraciones con RedisVL, LangChain y LlamaIndex.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Cuentas de Usuario</h2>
                <div className="text-gray-300 space-y-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Debes proporcionar información precisa y completa al registrarte.</li>
                    <li>Eres responsable de mantener la seguridad de tu cuenta y contraseña.</li>
                    <li>Debes notificarnos inmediatamente sobre cualquier uso no autorizado.</li>
                    <li>No puedes compartir credenciales de cuenta con terceros no autorizados.</li>
                    <li>Una persona o entidad no puede mantener más de una cuenta gratuita.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Uso Aceptable</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Te comprometes a no:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violar leyes o regulaciones aplicables.</li>
                    <li>Infringir derechos de propiedad intelectual de terceros.</li>
                    <li>Transmitir malware, virus u otro código malicioso.</li>
                    <li>Intentar acceder sin autorización a sistemas o datos.</li>
                    <li>Usar el servicio para actividades de spam o phishing.</li>
                    <li>Realizar ingeniería inversa o descompilar el software.</li>
                    <li>Exceder los límites de uso de tu plan sin autorización.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Propiedad Intelectual</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    <strong>Nuestra propiedad:</strong> RAGOptimizer y sus componentes, incluyendo
                    software, diseño, logos y documentación, son propiedad de RAGOptimizer Inc.
                    y están protegidos por derechos de autor y otras leyes.
                  </p>
                  <p>
                    <strong>Tu contenido:</strong> Conservas todos los derechos sobre los datos,
                    documentos y contenido que procesas a través de nuestros servicios. Nos otorgas
                    una licencia limitada para procesar tu contenido únicamente para proporcionar
                    los servicios.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Pagos y Facturación</h2>
                <div className="text-gray-300 space-y-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Los precios se establecen según el plan seleccionado y están sujetos a cambios con aviso previo.</li>
                    <li>Los pagos se procesan mensual o anualmente según tu elección.</li>
                    <li>Los reembolsos se manejan caso por caso según nuestra política de reembolsos.</li>
                    <li>El impago puede resultar en la suspensión o terminación del servicio.</li>
                    <li>Eres responsable de todos los impuestos aplicables.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Nivel de Servicio (SLA)</h2>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                  <p className="text-gray-300 mb-4">Para clientes de planes Pro y Enterprise:</p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong>Disponibilidad:</strong> 99.9% de uptime mensual garantizado.</li>
                    <li>• <strong>Créditos:</strong> Créditos de servicio por incumplimiento del SLA.</li>
                    <li>• <strong>Soporte:</strong> Tiempos de respuesta según el plan contratado.</li>
                    <li>• <strong>Mantenimiento:</strong> Ventanas de mantenimiento programadas con aviso previo.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Limitación de Responsabilidad</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, RAGOPTIMIZER NO SERÁ RESPONSABLE
                    POR DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES, CONSECUENTES O PUNITIVOS,
                    INCLUYENDO PÉRDIDA DE BENEFICIOS, DATOS O GOODWILL.
                  </p>
                  <p>
                    Nuestra responsabilidad total no excederá el monto pagado por ti en los
                    12 meses anteriores al evento que dio lugar al reclamo.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Indemnización</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Aceptas indemnizar y mantener indemne a RAGOptimizer, sus directores,
                    empleados y afiliados de cualquier reclamo, daño, pérdida o gasto que
                    surja de tu uso del servicio o violación de estos términos.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Terminación</h2>
                <div className="text-gray-300 space-y-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Puedes cancelar tu cuenta en cualquier momento desde la configuración.</li>
                    <li>Podemos suspender o terminar tu acceso por violación de estos términos.</li>
                    <li>Tras la terminación, tu derecho a usar el servicio cesa inmediatamente.</li>
                    <li>Podemos retener datos según sea requerido por ley o para fines legítimos.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">11. Modificaciones</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Nos reservamos el derecho de modificar estos términos en cualquier momento.
                    Los cambios materiales serán notificados con al menos 30 días de anticipación.
                    El uso continuado del servicio después de los cambios constituye aceptación.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">12. Ley Aplicable</h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Estos términos se rigen por las leyes del Estado de Delaware, EE.UU.,
                    sin tener en cuenta sus principios de conflicto de leyes. Cualquier disputa
                    será resuelta en los tribunales federales o estatales ubicados en Delaware.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">13. Contacto</h2>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 mb-4">
                    Para preguntas sobre estos Términos de Servicio:
                  </p>
                  <div className="flex items-center gap-2 text-orange-400">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:legal@ragoptimizer.com" className="hover:underline">
                      legal@ragoptimizer.com
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
