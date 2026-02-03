import React from 'react';
import { Wand2 } from 'lucide-react';
import { cn } from '../../utils/cn';
import { ActiveSkill } from '../../types';

interface SkillMonitorProps {
  skills: ActiveSkill[];
}

export function SkillMonitor({ skills }: SkillMonitorProps) {
  return (
    <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
        <Wand2 className="w-4 h-4 text-cyan-400" />
        Skill Monitor (LIVE)
      </h3>
      <div className="space-y-4">
        {skills.map(skill => (
          <div key={skill.id} className="relative group">
            <div className={cn(
              "flex items-center justify-between p-3 rounded-2xl border transition-all duration-500",
              skill.status === 'executing' 
                ? `border-opacity-100 ${skill.color.replace('bg-', 'border-')} shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)] shadow-current`
                : "border-white/5 bg-white/5"
            )}>
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  skill.status === 'executing' ? "animate-ping " + skill.color : "bg-slate-600"
                )} />
                <span className={cn(
                  "text-xs font-mono",
                  skill.status === 'executing' ? "text-white font-bold" : "text-slate-500"
                )}>@{skill.name}</span>
              </div>
              {skill.status === 'executing' && (
                <span className="text-[10px] uppercase font-black tracking-tighter animate-pulse text-white">Active</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
