'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  Activity,
  DollarSign,
  Clock,
  Zap,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  ShieldCheck
} from 'lucide-react';
import { useROIStore } from '../store/useROIStore';
import { getTelemetryStatsApi } from '../utils/api-client';

export function Dashboard() {
  const { results, strategy } = useROIStore();
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const data = await getTelemetryStatsApi();
        setStats(data);
      } catch (e) {
        console.error("Telemetry connect failed:", e);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
    const interval = setInterval(loadStats, 30000); // Polling cada 30s
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      label: 'Ahorro Total (Real)',
      value: stats ? `$${stats.total_savings}` : `$${results.monthlySavings.toLocaleString()}`,
      change: stats ? `Histórico` : `-${results.savingsPercentage}%`,
      icon: DollarSign,
      color: 'text-green-400'
    },
    {
      label: 'Índice de Fidelidad',
      value: stats ? `${(stats.confidence_score * 100).toFixed(1)}%` : '98.2%',
      change: stats ? 'Evaluado' : '+0.4%',
      icon: Activity,
      color: (stats?.confidence_score < 0.8) ? 'text-red-400' : 'text-blue-400'
    },
    {
      label: 'Latencia Promedio',
      value: stats ? `${stats.average_latency}ms` : (strategy === 'quantization_int8' ? '12ms' : '45ms'),
      change: stats ? 'Real' : (strategy === 'quantization_int8' ? '-73%' : '-5%'),
      icon: Clock,
      color: 'text-purple-400'
    },
    {
      label: 'Costo Inferencia (Real)',
      value: stats ? `$${stats.total_cost || '0.00'}` : `$${(results.projectedMonthlyCost / 1000).toFixed(4)}`,
      change: stats ? 'Acumulado' : '-52%',
      icon: Zap,
      color: 'text-orange-400'
    },
    {
      label: 'Autocorrecciones (AI)',
      value: stats ? stats.healed_count : '24',
      change: stats ? 'Neutralizadas' : '+12',
      icon: ShieldCheck,
      color: 'text-cyan-400'
    },
  ];

  const recommendations = [
    {
      type: 'optimization',
      icon: Lightbulb,
      title: 'Cuantizar embeddings a int8',
      description: `Ahorra $${(results.currentMonthlyCost * 0.4).toLocaleString()}/mes con solo +2ms de latencia adicional`,
      impact: '+$3.2K/mes'
    },
    {
      type: 'warning',
      icon: AlertTriangle,
      title: 'Explosión de costos detectada',
      description: 'Consultas analíticas aumentaron 340% ayer a las 14:00',
      impact: 'Revisar'
    },
    {
      type: 'trend',
      icon: TrendingUp,
      title: 'Nuevo modelo disponible',
      description: 'text-embedding-3-small ofrece mejor relación calidad/precio',
      impact: '-18% costo'
    },
  ];

  return (
    <section id="dashboard" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4" />
            Observabilidad
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dashboard en Tiempo Real
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Panel centralizado para monitorear la salud y eficiencia de tu pipeline RAG
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 blur-3xl opacity-30" />

          <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 md:p-10 shadow-2xl">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Activity className={`w-4 h-4 ${loading ? 'text-yellow-400' : 'text-green-400'}`} />
                <span>{loading ? 'Sincronizando...' : 'Conexión Real-Time (DUDE Optimized)'}</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    <span className="text-xs text-green-400 font-medium">{metric.change}</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-4">Costos por Hora (24h)</h4>
                <div className="flex items-end justify-between h-32 gap-1">
                  {[35, 42, 28, 65, 52, 38, 45, 72, 58, 48, 35, 42].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-red-500 to-orange-400 rounded-t opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-4">Cache Hit Rate (7d)</h4>
                <div className="flex items-end justify-between h-32 gap-2">
                  {[65, 68, 72, 75, 78, 81, 82].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-xs text-slate-500">{['L', 'M', 'X', 'J', 'V', 'S', 'D'][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                Recomendaciones de IA
              </h4>
              <div className="space-y-3">
                {recommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 hover:bg-slate-800/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${
                        rec.type === 'warning' ? 'bg-yellow-500/10 text-yellow-400' :
                        rec.type === 'trend' ? 'bg-blue-500/10 text-blue-400' :
                        'bg-green-500/10 text-green-400'
                      }`}>
                        <rec.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{rec.title}</p>
                        <p className="text-sm text-slate-400">{rec.description}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-semibold ${
                      rec.type === 'warning' ? 'text-yellow-400' :
                      'text-green-400'
                    }`}>
                      {rec.impact}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
