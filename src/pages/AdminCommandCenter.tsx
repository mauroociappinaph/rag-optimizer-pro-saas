import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { io, Socket } from 'socket.io-client';
import { 
  Bot, 
  Send, 
  ShieldCheck, 
  Zap, 
  Terminal,
  Cpu,
  DollarSign,
  TrendingUp,
} from 'lucide-react';
import { cn } from '../utils/cn';
import { SkillMonitor } from '../components/admin/SkillMonitor';
import { HealthMonitor } from '../components/admin/HealthMonitor';
import { ActiveSkill, AdminMessage, SystemHealthMetric } from '../types';

export function AdminCommandCenter() {
  const [messages, setMessages] = useState<AdminMessage[]>([{ 
    role: 'agent', 
    content: 'Bienvenido, Mauro. Conexión segura establecida. El sistema reporta una salud del 98% y el ROI es positivo. ¿En qué puedo ayudarte hoy?',
    timestamp: new Date()
  }]);
  const [activeSkills, setActiveSkills] = useState<ActiveSkill[]>([
    { id: '1', name: 'observability-engineer', status: 'idle', color: 'bg-cyan-500' },
    { id: '2', name: 'token-accountant', status: 'idle', color: 'bg-yellow-500' },
    { id: '3', name: 'master-rag-2026', status: 'idle', color: 'bg-purple-500' },
    { id: '4', name: 'security-auditor', status: 'idle', color: 'bg-red-500' },
  ]);
  const systemMetrics: SystemHealthMetric[] = [
    { label: "Redis Vector Store", status: "connected", value: "12ms" },
    { label: "Supabase DB", status: "connected", value: "Active" },
    { label: "AI Worker Cluster", status: "healthy", value: "3 Nodes" },
    { label: "Semantic Cache", status: "optimized", value: "82% Hit" },
  ];
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3000/admin');
    setSocket(newSocket);
    newSocket.on('agent_response', (msg: AdminMessage) => {
      setIsThinking(false);
      setMessages(prev => [...prev, { ...msg, timestamp: new Date(msg.timestamp) }]);
    });
    newSocket.on('skill_activated', (data: { skill: string, status: string }) => {
      setActiveSkills(prev => prev.map(s => s.name === data.skill ? { ...s, status: data.status as any } : s));
      if (data.status === 'executing') {
        setTimeout(() => setActiveSkills(prev => prev.map(s => s.name === data.skill ? { ...s, status: 'idle' } : s)), 4000);
      }
    });
    return () => { newSocket.close(); };
  }, []);

  const handleSend = () => {
    if (!input.trim() || !socket) return;
    setMessages(prev => [...prev, { role: 'user', content: input, timestamp: new Date() }]);
    setIsThinking(true);
    socket.emit('command', { message: input });
    setInput('');
  };

  useEffect(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), [messages, isThinking]);

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-20 px-6 pb-10">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-4 gap-6 h-[calc(100vh-120px)]">
        
        {/* Left Sidebar: Extracted Molecules */}
        <aside className="space-y-6 overflow-y-auto hidden lg:block">
          <SkillMonitor skills={activeSkills} />
          <HealthMonitor metrics={systemMetrics} />
        </aside>

        {/* Center: Command Chat Interface */}
        <main className="lg:col-span-2 flex flex-col bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />
          <div className="px-8 py-4 border-b border-white/5 flex items-center justify-between bg-slate-900/60">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center border border-indigo-500/30">
                <Bot className="w-6 h-6 text-indigo-400" />
              </div>
              <div><h2 className="font-bold text-lg">Admin Specialist</h2><p className="text-xs text-slate-400">Estado: Procesando con LangGraph</p></div>
            </div>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-slate-400">v7.4.2</span>
          </div>

          <div className="flex-grow overflow-y-auto p-8 space-y-6">
            <AnimatePresence>
              {messages.map((msg, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={cn("flex max-w-[85%]", msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto")}>
                  <div className={cn("p-4 rounded-2xl text-sm leading-relaxed relative overflow-hidden", msg.role === 'user' ? "bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-500/20" : "bg-slate-800/80 border border-white/5 text-slate-200 rounded-tl-none")}>
                    {msg.role === 'agent' && <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />}
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isThinking && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-slate-500 text-xs font-mono ml-4"><Cpu className="w-3 h-3 animate-spin" /> Especialista razonando...</motion.div>}
            </AnimatePresence>
            <div ref={chatEndRef} />
          </div>

          <div className="p-6 bg-slate-950/50 border-t border-white/5">
            <div className="relative group">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Comanda al especialista..." className="w-full bg-slate-900 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-white focus:outline-none focus:border-indigo-500/50 transition-all shadow-inner" />
              <button onClick={handleSend} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/40"><Send className="w-5 h-5" /></button>
            </div>
            <div className="flex gap-4 mt-4 justify-center">
              <QuickCommand label="Reporte ROI" onClick={() => { setInput("Genera un reporte de ROI de las últimas 24h"); handleSend(); }} />
              <QuickCommand label="Audit Logs" onClick={() => { setInput("Muestra logs sospechosos de PII"); handleSend(); }} />
              <QuickCommand label="Flush Cache" onClick={() => { setInput("¿Es necesario purgar el caché semántico?"); handleSend(); }} />
            </div>
          </div>
        </main>

        <aside className="space-y-6 overflow-y-auto hidden xl:block">
          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-400" /> Token Economy</h3>
            <div className="space-y-6">
              <MetricWidget label="Gasto Proyectado" value="$0.18" subValue="-45% vs ayer" icon={DollarSign} color="text-yellow-400" />
              <MetricWidget label="Tokens Procesados" value="1.2M" subValue="Eficiencia: Alta" icon={Cpu} color="text-blue-400" />
              <MetricWidget label="Ahorro Real (ROI)" value="$4.50" subValue="Por Semantic Cache" icon={TrendingUp} color="text-emerald-400" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-6 text-center">
            <ShieldCheck className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h4 className="font-bold mb-2">Modo Admin Activo</h4>
            <p className="text-xs text-slate-400">Acceso privilegiado concedido a Mauro. Acciones críticas auditadas.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function MetricWidget({ label, value, subValue, icon: Icon, color }: any) {
  return (
    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-white/10 transition-all">
      <div className="flex items-center justify-between mb-2"><Icon className={cn("w-5 h-5", color)} /><span className="text-xs text-emerald-400 font-medium">{subValue}</span></div>
      <p className="text-2xl font-black text-white">{value}</p><p className="text-xs text-slate-500 uppercase">{label}</p>
    </div>
  );
}

function QuickCommand({ label, onClick }: { label: string, onClick: () => void }) {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-400 hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"><Terminal className="w-3 h-3" />{label}</button>
  );
}