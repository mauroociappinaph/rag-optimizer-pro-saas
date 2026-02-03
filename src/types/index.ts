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

// --- API Reference Types ---
export interface ApiParam {
  nombre: string;
  tipo: string;
  requerido: boolean;
  descripcion: string;
}

export interface ApiEndpointItem {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  descripcion: string;
  params: ApiParam[];
  response: string;
}

export interface ApiCategory {
  categoria: string;
  icon: LucideIcon;
  items: ApiEndpointItem[];
}

// --- Community Types ---
export interface CommunityChannel {
  nombre: string;
  descripcion: string;
  icon: LucideIcon;
  color: GradientColor;
  link: string;
  miembros: string;
  activo: boolean;
}

export interface CommunityEvent {
  tipo: string;
  titulo: string;
  fecha: string;
  hora: string;
  speakers: string[];
  registrados: number;
}

export interface CommunityContributor {
  nombre: string;
  avatar: string;
  contribuciones: number;
  pais: string;
}

export interface CommunityResource {
  titulo: string;
  tipo: string;
  descargas: string;
  icon: LucideIcon;
}

// --- Changelog Types ---
export interface ReleaseHighlight {
  type: 'feature' | 'fix' | 'improvement' | 'security';
  text: string;
}

export interface Release {
  version: string;
  date: string;
  type: 'major' | 'minor' | 'patch';
  highlights: ReleaseHighlight[];
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

// --- Admin & Real-time Types ---
export type SkillStatus = 'executing' | 'completed' | 'idle';

export interface AdminMessage {
  role: 'user' | 'agent';
  content: string;
  timestamp: Date;
}

export interface ActiveSkill {
  id: string;
  name: string;
  status: SkillStatus;
  color: string;
}

export interface SystemHealthMetric {
  label: string;
  status: 'connected' | 'healthy' | 'optimized' | 'error';
  value: string;
}

