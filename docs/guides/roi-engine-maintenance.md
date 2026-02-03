# Guía de Mantenimiento del Motor de ROI

## Estructura
El motor reside en `src/utils/roi-engine.ts`. Utiliza multiplicadores fijos para estimar el ahorro basado en benchmarks de la industria 2026.

## Cómo actualizar multiplicadores
Si los costos de OpenAI o Anthropic cambian, actualiza la constante `STRATEGY_SAVINGS_MULTIPLIER`:

```typescript
const STRATEGY_SAVINGS_MULTIPLIER = {
  quantization_int8: 0.45, // Ajustado tras benchmark v1.5
  // ...
}
```

## Pruebas
Siempre corre los tests tras modificar la lógica:
```bash
npm test src/utils/__tests__/roi-engine.test.ts
```
