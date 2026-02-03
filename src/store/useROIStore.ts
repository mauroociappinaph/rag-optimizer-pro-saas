import { create } from 'zustand';
import { OptimizationStrategy, ROIResult } from '../types';
import { calculateSavings } from '../utils/roi-engine';

interface ROIState {
  // Input State
  tokens: number; // Millions
  strategy: OptimizationStrategy;
  
  // Calculated Results
  results: ROIResult;
  
  // Actions
  setTokens: (tokens: number) => void;
  setStrategy: (strategy: OptimizationStrategy) => void;
}

export const useROIStore = create<ROIState>((set, get) => ({
  tokens: 500,
  strategy: 'quantization_int8',
  results: calculateSavings({
    monthlyTokens: 500 * 1000000,
    currentCostPerMillion: 0.15,
    strategy: 'quantization_int8'
  }),

  setTokens: (tokens) => {
    set({ tokens });
    const { strategy } = get();
    set({ 
      results: calculateSavings({
        monthlyTokens: tokens * 1000000,
        currentCostPerMillion: 0.15,
        strategy
      })
    });
  },

  setStrategy: (strategy) => {
    set({ strategy });
    const { tokens } = get();
    set({ 
      results: calculateSavings({
        monthlyTokens: tokens * 1000000,
        currentCostPerMillion: 0.15,
        strategy
      })
    });
  }
}));
