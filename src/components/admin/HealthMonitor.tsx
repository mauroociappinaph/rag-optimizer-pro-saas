import React from 'react';
import { Activity } from 'lucide-react';
import { cn } from '../../utils/cn';
import { SystemHealthMetric } from '../../types';

interface HealthMonitorProps {
  metrics: SystemHealthMetric[];
}

export function HealthMonitor({ metrics }: HealthMonitorProps) {
  return (
    <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
        <Activity className="w-4 h-4 text-emerald-400" />
        Salud Sistémica
      </h3>
      <div className="space-y-4">
        {metrics.map((metric, idx) => (
          <div key={idx} className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-2 h-2 rounded-full",
                metric.status === 'connected' || metric.status === 'healthy' || metric.status === 'optimized' 
                  ? "bg-emerald-500" 
                  : "bg-red-500"
              )} />
              <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                {metric.label}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-500 group-hover:text-emerald-400">
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
