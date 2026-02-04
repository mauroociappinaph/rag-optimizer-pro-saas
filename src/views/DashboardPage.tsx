import React, { useState } from 'react';
import { Dashboard } from '../components/Dashboard';
import { createBillingPortalApi } from '../utils/api-client';
import { Settings, CreditCard, Loader2 } from 'lucide-react';

export function DashboardPage() {
  const [loadingPortal, setLoadingPortal] = useState(false);

  const handleOpenPortal = async () => {
    const mockCustomerId = 'cus_test_mauro_123'; // In real app, get from auth profile
    setLoadingPortal(true);
    try {
      const { url } = await createBillingPortalApi(mockCustomerId);
      window.location.href = url;
    } catch (error) {
      console.error('Portal error:', error);
      alert('Error al abrir el portal de facturación.');
    } finally {
      setLoadingPortal(false);
    }
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex justify-end">
        <button 
          onClick={handleOpenPortal}
          disabled={loadingPortal}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white hover:bg-slate-700 transition-all disabled:opacity-50"
        >
          {loadingPortal ? <Loader2 className="w-4 h-4 animate-spin" /> : <CreditCard className="w-4 h-4" />}
          Gestionar Suscripción
        </button>
      </div>
      <Dashboard />
    </div>
  );
}

