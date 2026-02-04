'use client';

import { motion } from 'framer-motion';
import { Cookie, Calendar, Mail, Settings, BarChart, Shield, Target } from 'lucide-react';
import { useState } from 'react';

import { COOKIE_TYPES as tiposCookies, COOKIE_DETAILS as cookiesDetalle } from '../data/legal-docs';

export function CookiesPage() {
  const [cookiePrefs, setCookiePrefs] = useState(
    tiposCookies.reduce((acc, cookie) => ({
      ...acc,
      [cookie.nombre]: cookie.activa
    }), {} as Record<string, boolean>)
  );

  const handleToggle = (nombre: string, requerida: boolean) => {
    if (requerida) return;
    setCookiePrefs(prev => ({
      ...prev,
      [nombre]: !prev[nombre]
    }));
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'Esencial': return 'bg-green-500/20 text-green-400';
      case 'Rendimiento': return 'bg-blue-500/20 text-blue-400';
      case 'Funcional': return 'bg-purple-500/20 text-purple-400';
      case 'Marketing': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] pt-20">
      {/* Hero */}
      <section className="py-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Cookie className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Política de Cookies</h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Última actualización: 15 de Enero, 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-4">¿Qué son las Cookies?</h2>
            <p className="text-gray-300 mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando
              visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen
              de manera más eficiente y proporcionar información a los propietarios del sitio.
            </p>
            <p className="text-gray-300">
              En RAGOptimizer utilizamos cookies para mejorar tu experiencia, analizar el tráfico
              del sitio y personalizar el contenido. Esta política explica qué cookies utilizamos
              y cómo puedes controlarlas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Preferencias de Cookies */}
      <section className="py-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Gestionar Preferencias</h2>

          <div className="space-y-4">
            {tiposCookies.map((cookie, index) => (
              <motion.div
                key={cookie.nombre}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <cookie.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{cookie.nombre}</h3>
                        {cookie.requerida && (
                          <span className="px-2 py-0.5 rounded text-xs bg-gray-500/20 text-gray-400">
                            Requerida
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{cookie.descripcion}</p>
                      <div className="flex flex-wrap gap-2">
                        {cookie.ejemplos.map((ejemplo, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded text-xs bg-white/5 text-gray-400"
                          >
                            {ejemplo}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleToggle(cookie.nombre, cookie.requerida)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      cookiePrefs[cookie.nombre]
                        ? 'bg-orange-500'
                        : 'bg-gray-600'
                    } ${cookie.requerida ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    disabled={cookie.requerida}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        cookiePrefs[cookie.nombre] ? 'left-7' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Guardar Preferencias
            </button>
            <button className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
              Aceptar Todas
            </button>
          </div>
        </div>
      </section>

      {/* Lista Detallada */}
      <section className="py-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Cookies que Utilizamos</h2>

          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Nombre</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Proveedor</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Propósito</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Expiración</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  {cookiesDetalle.map((cookie, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-0">
                      <td className="px-6 py-4">
                        <code className="text-sm text-orange-400">{cookie.nombre}</code>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">{cookie.proveedor}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{cookie.proposito}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{cookie.expiracion}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getTipoColor(cookie.tipo)}`}>
                          {cookie.tipo}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Controlar */}
      <section className="py-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">Cómo Controlar las Cookies</h2>

          <div className="prose prose-invert prose-orange max-w-none">
            <div className="text-gray-300 space-y-4">
              <p>
                Además de las opciones de preferencia en esta página, puedes controlar las cookies
                a través de la configuración de tu navegador:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
              </ul>
              <p>
                Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad
                del sitio y tu experiencia de usuario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">¿Preguntas sobre Cookies?</h2>
            <p className="text-gray-300 mb-4">
              Si tienes preguntas sobre nuestra política de cookies o cómo usamos tus datos,
              no dudes en contactarnos:
            </p>
            <div className="flex items-center gap-2 text-orange-400">
              <Mail className="w-5 h-5" />
              <a href="mailto:privacy@ragoptimizer.com" className="hover:underline">
                privacy@ragoptimizer.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
