import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Book, 
  Code, 
  Zap, 
  Database,
  Search,
  Terminal,
  FileText,
  Settings,
  ArrowRight,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';

import { 
  DOCUMENTATION_SECTIONS as sections, 
  DOCUMENTATION_EXAMPLES as codeExamples, 
  DOCUMENTATION_TEXTS as documentationTexts 
} from '../data/documentation';

export function DocumentacionPage() {
  const [activeSection, setActiveSection] = useState('quickstart');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    if (codeExamples[activeSection]) {
      navigator.clipboard.writeText(codeExamples[activeSection]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                <Book className="w-4 h-4" />
                Documentación
              </span>
              <h1 className="text-4xl font-bold text-white mb-2">
                Documentación Técnica
              </h1>
              <p className="text-slate-400">
                Todo lo que necesitas para integrar RAG Optimizer en tu proyecto
              </p>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Buscar en la documentación..."
                  className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 w-64"
                />
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8 py-12">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block w-64 shrink-0"
            >
              <div className="sticky top-24">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
                  Guías
                </h4>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-all ${
                        activeSection === section.id
                          ? 'bg-blue-500/10 text-blue-400 border-l-2 border-blue-500'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      <section.icon className="w-4 h-4" />
                      {section.label}
                    </button>
                  ))}
                </nav>

                <div className="mt-8 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                  <h4 className="font-semibold text-white mb-2">¿Necesitas ayuda?</h4>
                  <p className="text-sm text-slate-400 mb-4">
                    Nuestro equipo está listo para asistirte
                  </p>
                  <button className="w-full py-2 bg-slate-700 text-white text-sm rounded-lg hover:bg-slate-600 transition-colors">
                    Contactar Soporte
                  </button>
                </div>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 min-w-0"
            >
              <div className="prose prose-invert max-w-none">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {sections.find(s => s.id === activeSection)?.label}
                  </h2>
                  <p className="text-slate-400 text-lg">
                    {documentationTexts[activeSection]}
                  </p>
                </div>

                {/* Code Block */}
                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-400">
                        {activeSection === 'api' ? 'bash' : 'python'}
                      </span>
                    </div>
                    <button
                      onClick={copyCode}
                      className="flex items-center gap-2 px-3 py-1 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-400" />
                          Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copiar
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-6 overflow-x-auto">
                    <code className="text-sm text-slate-300 font-mono">
                      {codeExamples[activeSection]}
                    </code>
                  </pre>
                </div>

                {/* Next Steps */}
                <div className="mt-12 grid md:grid-cols-2 gap-4">
                  {activeSection !== 'api' && (
                    <button
                      onClick={() => {
                        const currentIndex = sections.findIndex(s => s.id === activeSection);
                        if (currentIndex < sections.length - 1) {
                          setActiveSection(sections[currentIndex + 1].id);
                        }
                      }}
                      className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl text-left hover:bg-slate-800/50 transition-all group"
                    >
                      <p className="text-sm text-slate-400 mb-1">Siguiente</p>
                      <p className="font-semibold text-white flex items-center gap-2">
                        {sections[sections.findIndex(s => s.id === activeSection) + 1]?.label}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </p>
                    </button>
                  )}
                  <a
                    href="#"
                    className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl text-left hover:from-blue-500/20 hover:to-cyan-500/20 transition-all"
                  >
                    <p className="text-sm text-blue-400 mb-1">Recurso</p>
                    <p className="font-semibold text-white flex items-center gap-2">
                      Ver ejemplos en GitHub
                      <ExternalLink className="w-4 h-4" />
                    </p>
                  </a>
                </div>
              </div>
            </motion.main>
          </div>
        </div>
      </section>
    </div>
  );
}
