import { describe, it, expect } from 'vitest';
import { calculateSavings } from '../roi-engine';
import { ROIScenario } from '../../types';

describe('ROI Engine - calculateSavings', () => {
  it('should calculate accurate savings for a standard 1B tokens scenario with quantization', () => {
    const scenario: ROIScenario = {
      monthlyTokens: 1000000000, // 1B
      currentCostPerMillion: 0.10, // $0.10 per 1M tokens (e.g., standard embeddings)
      strategy: 'quantization_int8',
      latencyToleranceMs: 10
    };

    const result = calculateSavings(scenario);

    // Anticipated savings for int8 quantization is ~40% reduction in infrastructure costs
    // 1000M * ($0.10/1M) = $100.00 current cost
    // 40% saving = $40.00
    expect(result.currentMonthlyCost).toBe(100);
    expect(result.projectedMonthlyCost).toBe(60);
    expect(result.monthlySavings).toBe(40);
    expect(result.savingsPercentage).toBe(40);
  });

  it('should return zero savings for empty or invalid input', () => {
    const scenario: ROIScenario = {
      monthlyTokens: 0,
      currentCostPerMillion: 0.10,
      strategy: 'quantization_int8'
    };

    const result = calculateSavings(scenario);
    expect(result.monthlySavings).toBe(0);
  });
});
