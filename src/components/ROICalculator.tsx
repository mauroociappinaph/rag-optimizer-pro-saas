import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  DollarSign, 
  Cpu, 
  Database, 
  Layers,
  ArrowRight,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { useROIStore } from '../store/useROIStore';
import { captureLeadApi } from '../utils/api-client';

const strategies = [
  { id: 'quantization_int8', name: 'Cuantización', icon: Cpu, desc: 'Optimización de memoria' },
  { id: 'vector_caching', name: 'Caching', icon: Database, desc: 'Reutilización de consultas' },
  { id: 'llm_reranking_optimization', name: 'Reranking', icon: Layers, desc: 'Eficiencia en cómputo' },
] as const;

export function ROICalculator() {
  const { tokens, strategy, results, setTokens, setStrategy } = useROIStore();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleCapture = async () => {
    if (!email) return;
    setStatus('loading');
    try {
      await captureLeadApi({
        email,
        monthly_tokens: tokens * 1000000,
        estimated_savings: results.monthlySavings,
        strategy
      });
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Controles */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl"
      >
        <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          Configura tu Escenario
        </h4>

        <div className="space-y-10">
          {/* Slider de Tokens */}
          <div>
            <div className="flex justify-between mb-4">
              <label className="text-slate-400 font-medium">Volumen Mensual de Tokens</label>
              <span className="text-indigo-400 font-bold">{tokens}M</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="5000" 
              step="10"
              value={tokens}
              onChange={(e) => setTokens(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between mt-2 text-xs text-slate-500 uppercase tracking-widest">
              <span>10M</span>
              <span>5B</span>
            </div>
          </div>

          {/* Selector de Estrategia */}
          <div>
            <label className="text-slate-400 font-medium mb-4 block">Estrategia de Optimización</label>
            <div className="grid grid-cols-1 gap-3">
              {strategies.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStrategy(s.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${
                    strategy === s.id 
                    ? 'bg-indigo-500/10 border-indigo-500/50 text-white shadow-lg shadow-indigo-500/10' 
                    : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${strategy === s.id ? 'bg-indigo-500 text-white' : 'bg-slate-700'}`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold">{s.name}</div>
                    <div className="text-xs opacity-60">{s.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visualización de Resultados */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-3xl h-full flex flex-col">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h4 className="text-slate-400 font-medium mb-1">Ahorro Mensual Estimado</h4>
              <div className="text-5xl font-black text-white flex items-center gap-2">
                <DollarSign className="w-8 h-8 text-green-400" />
                {results.monthlySavings.toLocaleString()}
              </div>
            </div>
            <div className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-bold animate-pulse">
              -{results.savingsPercentage}%
            </div>
          </div>

          <div className="space-y-6 flex-grow">
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Costo Actual</span>
                <span className="text-slate-300 font-mono">${results.currentMonthlyCost.toLocaleString()}</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-slate-600 w-full"></div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-indigo-400 font-bold">Costo con DUDE</span>
                <span className="text-white font-mono font-bold">${results.projectedMonthlyCost.toLocaleString()}</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: '100%' }}
                  animate={{ width: `${100 - results.savingsPercentage}%` }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                ></motion.div>
              </div>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="mt-8 space-y-4">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-3 text-green-400"
              >
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">¡Ahorro desbloqueado! Te contactaremos pronto.</span>
              </motion.div>
            ) : (
              <>
                <div className="relative">
                  <input 
                    type="email"
                    placeholder="Ingresa tu email corporativo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-all"
                  />
                </div>
                <button 
                  onClick={handleCapture}
                  disabled={!email || status === 'loading'}
                  className="w-full group flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl hover:bg-indigo-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Obtener este Ahorro Ahora
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
