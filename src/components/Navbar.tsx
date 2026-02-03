import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Producto', href: '/producto' },
  { label: 'Características', href: '/caracteristicas' },
  { label: 'Precios', href: '/precios' },
];

const recursosLinks = [
  { label: 'Documentación', href: '/documentacion' },
  { label: 'Guías', href: '/guias' },
  { label: 'API Reference', href: '/api-reference' },
  { label: 'Casos de Uso', href: '/casos-de-uso' },
  { label: 'Comunidad', href: '/comunidad' },
];

const empresaLinks = [
  { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
  { label: 'Blog', href: '/blog' },
  { label: 'Carreras', href: '/carreras' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'Changelog', href: '/changelog' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [recursosOpen, setRecursosOpen] = useState(false);
  const [empresaOpen, setEmpresaOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white text-lg">RAG Optimizer</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Recursos Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setRecursosOpen(!recursosOpen)}
                  onBlur={() => setTimeout(() => setRecursosOpen(false), 150)}
                  className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Recursos
                  <ChevronDown className={`w-4 h-4 transition-transform ${recursosOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {recursosOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden"
                    >
                      {recursosLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          onClick={() => setRecursosOpen(false)}
                          className="block px-4 py-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Empresa Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setEmpresaOpen(!empresaOpen)}
                  onBlur={() => setTimeout(() => setEmpresaOpen(false), 150)}
                  className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Empresa
                  <ChevronDown className={`w-4 h-4 transition-transform ${empresaOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {empresaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden"
                    >
                      {empresaLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          onClick={() => setEmpresaOpen(false)}
                          className="block px-4 py-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Iniciar Sesión
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white font-medium text-sm rounded-lg hover:from-red-500 hover:to-orange-500 transition-all">
                Comenzar Gratis
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Recursos Section Mobile */}
              <div className="pt-2 border-t border-slate-800">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Recursos</p>
                {recursosLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 font-medium transition-colors ${
                      location.pathname === link.href
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              {/* Empresa Section Mobile */}
              <div className="pt-2 border-t border-slate-800">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Empresa</p>
                {empresaLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 font-medium transition-colors ${
                      location.pathname === link.href
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <button className="w-full text-slate-400 hover:text-white transition-colors font-medium text-left">
                  Iniciar Sesión
                </button>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-medium rounded-lg">
                  Comenzar Gratis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
