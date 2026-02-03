# ADR-007: Implementación de Motores Reales (RedisVL + Sovereign Embeddings)

**Estatus:** Aceptado
**Fecha:** 2026-02-03

## Contexto
El sistema operaba con mocks que no validaban la propuesta de valor del SaaS. Para cumplir con las métricas de "-60% costos" y "latencia mínima", se requiere una integración profunda con bases de datos vectoriales y modelos de inferencia local.

## Decisión
Implementar el núcleo técnico del AI Worker utilizando:
1. **RedisVL (Vector Library):** Para la gestión profesional de índices vectoriales y la implementación nativa de **Semantic Caching**.
2. **HFTextVectorizer (Local):** Uso de `sentence-transformers` ejecutándose localmente en el worker. Esto elimina la dependencia de APIs externas para la generación de embeddings, garantizando **Soberanía Técnica** y costo $0 por vectorización.
3. **Esquema de Cache Semántico:** Definir un umbral de distancia estricto (0.1) para asegurar que el ahorro de costos no degrade la precisión de las respuestas.

## Consecuencias
- **Pros:** El SaaS ya no es un mockup; genera vectores reales; el ahorro es medible y verificable técnicamente.
- **Contras:** Aumenta el consumo de RAM/CPU en el worker debido a la inferencia local (compensado por el ahorro masivo en tokens de nuble).
