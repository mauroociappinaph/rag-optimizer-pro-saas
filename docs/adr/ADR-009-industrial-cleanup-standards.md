# ADR-009: Estándares de Higiene Industrial y Saneamiento (Purgatorio v2)

**Estatus:** Aceptado
**Fecha:** 2026-02-03

## Contexto
Tras la fase de integración de pagos y telemetría, el repositorio acumuló archivos redundantes y violaciones menores a la "Ley de las 300 líneas" en el frontend. Para certificar el estado **Golden Repository**, es necesario un saneamiento sistémico.

## Decisión
Implementar un protocolo de limpieza industrial basado en:
1.  **Eliminación de Redundancia (DRY):** Borrado de `skill_worker.py` en el worker de Python. El motor único reside en `skill_engine.py`.
2.  **Externalización de Datos (SRP):** Desacoplamiento de datos estáticos en componentes React. Los posts del blog ahora residen en `src/data/blog.ts`, bajando la carga cognitiva de `BlogPage.tsx`.
3.  **Unificación de Canales (Real-time):** Sincronización de `TelemetryService` con `AdminGateway`. Cualquier evento capturado por el sistema de telemetría debe ser emitido vía WebSocket para observabilidad instantánea del CEO (Mauro).

## Consecuencias
- **Pros:** Repositorio 100% libre de "dead code"; cumplimiento estricto del SRP; visualización en tiempo real de la actividad de los usuarios.
- **Contras:** Requiere que los servicios de negocio (NestJS) tengan visibilidad de los componentes de infraestructura (WebSockets).
