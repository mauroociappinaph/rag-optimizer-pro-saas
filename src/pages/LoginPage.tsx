import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/auth/LoginForm';
import { Bot } from 'lucide-react';

export function LoginPage() {
  return (
    <div className="flex min-h-[calc(100-80px)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]" />

      <div className="relative w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="rounded-2xl bg-indigo-500/10 p-3 ring-1 ring-indigo-500/20">
              <Bot className="h-10 w-10 text-indigo-400" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
            Bienvenido de nuevo
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            ¿No tienes una cuenta?{' '}
            <Link
              to="/signup"
              className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Regístrate gratis
            </Link>
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-2xl">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
