import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Dashboard } from '../components/Dashboard';
import { Integrations } from '../components/Integrations';
import { ROI } from '../components/ROI';

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Dashboard />
      <Integrations />
      <ROI />
    </>
  );
}
