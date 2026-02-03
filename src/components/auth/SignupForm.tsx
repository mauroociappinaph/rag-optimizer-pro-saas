'use client';

import React, { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Mail, Lock, Loader2, ArrowRight, User } from 'lucide-react';
import { signUpApi } from '../../utils/api-client';
import { useNavigate } from 'react-router-dom';
import { analytics } from '../../utils/analytics';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative flex w-full justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-2">
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Creando cuenta...
          </>
        ) : (
          <>
            Crear cuenta
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </span>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
}

export function SignupForm() {
  const navigate = useNavigate();

  const [state, formAction] = useActionState(
    async (prevState: any, formData: FormData) => {
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
      const confirmPassword = formData.get('confirm-password') as string;

      if (password !== confirmPassword) {
        return { error: 'Las contraseñas no coinciden' };
      }

      try {
        analytics.track('auth_signup_attempt', { email });
        const result = await signUpApi(email, password);
        if (result.error) {
          return { error: result.error.message };
        }
        // Signup usually doesn't log in automatically in some flows, 
        // but here we expect the user to maybe verify email or log in.
        // For now, let's redirect to login.
        navigate('/login');
        return { success: true };
      } catch (err: any) {
        return { error: err.message || 'Error inesperado al registrarse' };
      }
    },
    { error: null, success: false }
  );

  return (
    <div className="w-full max-w-md">
      <form action={formAction} className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-1.5 ml-1"
            >
              Email
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-xl border-0 bg-slate-900/50 py-3 pl-10 pr-3 text-white ring-1 ring-inset ring-slate-800 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 backdrop-blur-xl transition-all"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-300 mb-1.5 ml-1"
            >
              Contraseña
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                <Lock className="h-5 w-5" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full rounded-xl border-0 bg-slate-900/50 py-3 pl-10 pr-3 text-white ring-1 ring-inset ring-slate-800 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 backdrop-blur-xl transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-slate-300 mb-1.5 ml-1"
            >
              Confirmar Contraseña
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                <Lock className="h-5 w-5" />
              </div>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full rounded-xl border-0 bg-slate-900/50 py-3 pl-10 pr-3 text-white ring-1 ring-inset ring-slate-800 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 backdrop-blur-xl transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>

        {state.error && (
          <div className="rounded-xl bg-red-500/10 p-4 border border-red-500/20 animate-in fade-in slide-in-from-top-1">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-400">{state.error}</p>
              </div>
            </div>
          </div>
        )}

        <SubmitButton />
      </form>
    </div>
  );
}
