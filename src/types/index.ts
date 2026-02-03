import { LucideIcon } from 'lucide-react';

// --- UI & Branding Types ---
export type GradientColor = `from-${string} to-${string}`;

// --- Feature Types ---
export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  tech: string;
  description: string;
  features: string[];
  impact: string;
  impactLabel: string;
  gradient: GradientColor;
}

// --- Pricing Types ---
export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  icon: LucideIcon;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  features: PricingFeature[];
  cta: string;
  popular: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

// --- Use Case Types ---
export interface MetricResult {
  valor: string;
  label: string;
}

export interface Testimonial {
  texto: string;
  autor: string;
  empresa: string;
}

export interface UseCase {
  id: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  imagen: string;
  color: GradientColor;
  desafios: string[];
  solucion: string[];
  resultados: Record<string, MetricResult>;
  testimonial: Testimonial;
}

// --- ROI Engine Types ---
export type OptimizationStrategy = 'quantization_int8' | 'vector_caching' | 'llm_reranking_optimization';

export interface ROIScenario {
  monthlyTokens: number;
  currentCostPerMillion: number;
  strategy: OptimizationStrategy;
  latencyToleranceMs?: number;
}

export interface ROIResult {
  currentMonthlyCost: number;
  projectedMonthlyCost: number;
  monthlySavings: number;
  savingsPercentage: number;
}
