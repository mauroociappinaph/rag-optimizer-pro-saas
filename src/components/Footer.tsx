import Link from 'next/link';
import { Database, Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  Producto: [
    { label: 'Características', href: '/caracteristicas' },
    { label: 'Precios', href: '/precios' },
    { label: 'Documentación', href: '/documentacion' },
    { label: 'Changelog', href: '/changelog' }
  ],
  Empresa: [
    { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { label: 'Blog', href: '/blog' },
    { label: 'Carreras', href: '/carreras' },
    { label: 'Contacto', href: '/contacto' }
  ],
  Recursos: [
    { label: 'Guías', href: '/guias' },
    { label: 'API Reference', href: '/api-reference' },
    { label: 'Casos de Uso', href: '/casos-de-uso' },
    { label: 'Comunidad', href: '/comunidad' }
  ],
  Legal: [
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Términos', href: '/terminos' },
    { label: 'Seguridad', href: '/seguridad' },
    { label: 'Cookies', href: '/cookies' }
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white text-lg">RAG Optimizer</span>
            </Link>
            <p className="text-slate-400 mb-6">
              Plataforma SaaS para optimización automática de pipelines RAG con Redis como núcleo.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 RAG Optimizer Pro. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Todos los sistemas operativos
          </div>
        </div>
      </div>
    </footer>
  );
}
