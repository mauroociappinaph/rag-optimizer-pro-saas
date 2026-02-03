# ADR-002: Arquitectura de Inferencia Asimétrica

**Estatus:** Aceptado
**Fecha:** 2026-02-03

## Contexto
El proyecto requiere una gestión robusta de suscripciones (Stripe) y autenticación, combinada con tareas intensivas de IA (procesamiento de embeddings, chunking adaptativo). Una arquitectura monolitica en Node.js limitaría el acceso a librerías de IA de Python, mientras que una en Python puro ralentizaría la integración de servicios empresariales como Stripe.

## Decisión
Implementar una **Arquitectura Híbrida de Inferencia Asimétrica**:
1. **NestJS (API Gateway):** Orquestador de lógica de negocio, autenticación de Supabase e integración con Stripe.
2. **FastAPI (AI Worker):** Microservicio especializado en el pipeline de RAG (Troceado de documentos, selección de modelos de embedding).
3. **Supabase (Data Store):** Single Source of Truth para PostgreSQL, pgvector y Auth.

## Consecuencias
- **Pros:** Máximo ROI tecnológico; uso de las mejores herramientas para cada tarea; escalabilidad independiente.
- **Contras:** Requiere gestión de comunicación entre servicios (HTTP/Internal network).
