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

const STRATEGY_SAVINGS_MULTIPLIER: Record<OptimizationStrategy, number> = {
  quantization_int8: 0.40, // 40% savings
  vector_caching: 0.65,    // 65% savings on repeated queries
  llm_reranking_optimization: 0.25 // 25% savings on total compute
};

export function calculateSavings(scenario: ROIScenario): ROIResult {
  const { monthlyTokens, currentCostPerMillion, strategy } = scenario;

  if (!monthlyTokens || monthlyTokens <= 0) {
    return {
      currentMonthlyCost: 0,
      projectedMonthlyCost: 0,
      monthlySavings: 0,
      savingsPercentage: 0
    };
  }

  const currentMonthlyCost = (monthlyTokens / 1000000) * currentCostPerMillion;
  const savingsMultiplier = STRATEGY_SAVINGS_MULTIPLIER[strategy] || 0;
  
  const monthlySavings = currentMonthlyCost * savingsMultiplier;
  const projectedMonthlyCost = currentMonthlyCost - monthlySavings;
  const savingsPercentage = savingsMultiplier * 100;

  return {
    currentMonthlyCost: Number(currentMonthlyCost.toFixed(2)),
    projectedMonthlyCost: Number(projectedMonthlyCost.toFixed(2)),
    monthlySavings: Number(monthlySavings.toFixed(2)),
    savingsPercentage: Number(savingsPercentage.toFixed(2))
  };
}
