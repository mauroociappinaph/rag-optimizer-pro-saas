import os
import json
import logging

logger = logging.getLogger("uvicorn")

GLOBAL_PRICING_PATH = "/Users/mauroociappina/.gemini/antigravity/global_skills/token-accountant/resources/pricing_matrix.json"

class TokenAccountant:
    """
    Sovereign Token Accountant:
    Audits LLM usage and calculates real-time costs based on industry standards.
    """
    def __init__(self):
        self.pricing = self._load_pricing()

    def _load_pricing(self):
        try:
            if os.path.exists(GLOBAL_PRICING_PATH):
                with open(GLOBAL_PRICING_PATH, 'r') as f:
                    return json.load(f)
            else:
                logger.error(f"Pricing matrix not found at {GLOBAL_PRICING_PATH}")
                return None
        except Exception as e:
            logger.error(f"Error loading pricing matrix: {str(e)}")
            return None

    def calculate_cost(self, model: str, input_tokens: int, output_tokens: int) -> float:
        """Calculates costs in USD based on input/output tokens."""
        if not self.pricing or "models" not in self.pricing:
            return 0.0

        model_pricing = self.pricing["models"].get(model)
        if not model_pricing:
            # Fallback for unknown models
            logger.warning(f"No pricing found for model '{model}'. Using default GPT-4o pricing.")
            model_pricing = self.pricing["models"].get("gpt-4o")

        input_cost = (input_tokens / 1_000_000) * model_pricing["input_per_1m"]
        output_cost = (output_tokens / 1_000_000) * model_pricing["output_per_1m"]

        return round(input_cost + output_cost, 6)

# Singleton instance
accountant = TokenAccountant()
