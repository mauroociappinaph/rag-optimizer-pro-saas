# ADR-005: Optimización de Prompts vía DSPy (MIPROv2)

**Estatus:** Aceptado
**Fecha:** 2026-02-03

## Contexto
El "Prompt Engineering" manual es una heurística frágil que no escala. A medida que el SaaS introduce flujos complejos de RAG (Adaptive Chunking, Auto-Reranking), la calidad de las respuestas depende de instrucciones que deben ser ajustadas para cada modelo (Llama vs GPT vs Claude).

## Decisión
Adoptar el framework **DSPy** para la programación y optimización de prompts:
1. **Reemplazo de Instrucciones Estáticas:** No escribiremos prompts manuales en el código. Definiremos firmas (`Signatures`) y dejaremos que el optimizador MIPROv2 genere las instrucciones.
2. **Ciclo de Compilación:** Implementar un flujo de "Train -> Compile -> Deploy" donde los prompts se optimizan contra métricas de precisión de recuperación (Retrieval Recall).
3. **Soberanía Local:** La compilación se realizará preferentemente con modelos locales vía Ollama para proteger la propiedad intelectual de las estrategias de optimización.

## Consecuencias
- **Pros:** Aumento medible en la precisión del pipeline; portabilidad total entre modelos de IA; eliminación del factor "adivinanza" en el desarrollo.
- **Contras:** Requiere un dataset mínimo (5-10 ejemplos) para compilar cada componente de IA.
