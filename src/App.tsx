import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Loader2 } from 'lucide-react';

// --- Industrial Performance: Route-based Code Splitting (2026 Standard) ---
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ProductoPage = lazy(() => import('./pages/ProductoPage').then(m => ({ default: m.ProductoPage })));
const CaracteristicasPage = lazy(() => import('./pages/CaracteristicasPage').then(m => ({ default: m.CaracteristicasPage })));
const PreciosPage = lazy(() => import('./pages/PreciosPage').then(m => ({ default: m.PreciosPage })));
const DocumentacionPage = lazy(() => import('./pages/DocumentacionPage').then(m => ({ default: m.DocumentacionPage })));
const ChangelogPage = lazy(() => import('./pages/ChangelogPage').then(m => ({ default: m.ChangelogPage })));
const SobreNosotrosPage = lazy(() => import('./pages/SobreNosotrosPage').then(m => ({ default: m.SobreNosotrosPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })));
const CarrerasPage = lazy(() => import('./pages/CarrerasPage').then(m => ({ default: m.CarrerasPage })));
const ContactoPage = lazy(() => import('./pages/ContactoPage').then(m => ({ default: m.ContactoPage })));
const GuiasPage = lazy(() => import('./pages/GuiasPage').then(m => ({ default: m.GuiasPage })));
const ApiReferencePage = lazy(() => import('./pages/ApiReferencePage').then(m => ({ default: m.ApiReferencePage })));
const CasosDeUsoPage = lazy(() => import('./pages/CasosDeUsoPage').then(m => ({ default: m.CasosDeUsoPage })));
const ComunidadPage = lazy(() => import('./pages/ComunidadPage').then(m => ({ default: m.ComunidadPage })));
const PrivacidadPage = lazy(() => import('./pages/PrivacidadPage').then(m => ({ default: m.PrivacidadPage })));
const TerminosPage = lazy(() => import('./pages/TerminosPage').then(m => ({ default: m.TerminosPage })));
const SeguridadPage = lazy(() => import('./pages/SeguridadPage').then(m => ({ default: m.SeguridadPage })));
const CookiesPage = lazy(() => import('./pages/CookiesPage').then(m => ({ default: m.CookiesPage })));
const LoginPage = lazy(() => import('./pages/LoginPage').then(m => ({ default: m.LoginPage })));
const SignupPage = lazy(() => import('./pages/SignupPage').then(m => ({ default: m.SignupPage })));
const DashboardPage = lazy(() => import('./pages/DashboardPage').then(m => ({ default: m.DashboardPage })));
const AdminCommandCenter = lazy(() => import('./pages/AdminCommandCenter').then(m => ({ default: m.AdminCommandCenter })));

function PageLoader() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
        <span className="text-slate-500 font-mono text-xs uppercase tracking-widest">Cargando Activo Industrial...</span>
      </div>
    </div>
  );
}

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Páginas principales */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/admin/command-center" element={<AdminCommandCenter />} />
            <Route path="/producto" element={<ProductoPage />} />
            <Route path="/caracteristicas" element={<CaracteristicasPage />} />
            <Route path="/precios" element={<PreciosPage />} />
            <Route path="/documentacion" element={<DocumentacionPage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            
            {/* Empresa */}
            <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/carreras" element={<CarrerasPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            
            {/* Recursos */}
            <Route path="/guias" element={<GuiasPage />} />
            <Route path="/api-reference" element={<ApiReferencePage />} />
            <Route path="/casos-de-uso" element={<CasosDeUsoPage />} />
            <Route path="/comunidad" element={<ComunidadPage />} />
            
            {/* Legal */}
            <Route path="/privacidad" element={<PrivacidadPage />} />
            <Route path="/terminos" element={<TerminosPage />} />
            <Route path="/seguridad" element={<SeguridadPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}