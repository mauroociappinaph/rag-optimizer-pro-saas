import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductoPage } from './pages/ProductoPage';
import { CaracteristicasPage } from './pages/CaracteristicasPage';
import { PreciosPage } from './pages/PreciosPage';
import { DocumentacionPage } from './pages/DocumentacionPage';
import { ChangelogPage } from './pages/ChangelogPage';
import { SobreNosotrosPage } from './pages/SobreNosotrosPage';
import { BlogPage } from './pages/BlogPage';
import { CarrerasPage } from './pages/CarrerasPage';
import { ContactoPage } from './pages/ContactoPage';
import { GuiasPage } from './pages/GuiasPage';
import { ApiReferencePage } from './pages/ApiReferencePage';
import { CasosDeUsoPage } from './pages/CasosDeUsoPage';
import { ComunidadPage } from './pages/ComunidadPage';
import { PrivacidadPage } from './pages/PrivacidadPage';
import { TerminosPage } from './pages/TerminosPage';
import { SeguridadPage } from './pages/SeguridadPage';
import { CookiesPage } from './pages/CookiesPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { DashboardPage } from './pages/DashboardPage';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Navbar />
        <Routes>
          {/* Páginas principales */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
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
        <Footer />
      </div>
    </Router>
  );
}
