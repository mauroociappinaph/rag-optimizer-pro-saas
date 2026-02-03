# ADR-008: Especialista de Operaciones (Admin Agent) & Visual HQ

**Estatus:** Propuesto
**Fecha:** 2026-02-03

## Contexto
Mauro requiere una interfaz de mando visual y un agente con privilegios elevados para supervisar la red de especialistas, auditar costos en tiempo real y gestionar la infraestructura (Redis/Supabase) sin usar la terminal.

## Decisión
Implementar el **Admin Agent** utilizando una arquitectura de tres capas:

1.  **Frontend (UI Glassmorphism):**
    *   Ruta: `/admin/command-center`.
    *   Componente: `AdminCommandCenter.tsx` (basado en la skill `web-command-center`).
    *   Funcionalidad: Chat interactivo con el agente y visualización de nodos de memoria del "Cerebro Central".

2.  **NestJS (API Gateway & Guardián):**
    *   `AdminGuard`: Validador de JWT de Supabase que verifica el campo `role === 'admin'` en la tabla `profiles`.
    *   `AdminAgentController`: Proxy seguro que recibe comandos en lenguaje natural y los delega al AI Worker.

3.  **FastAPI (AI Worker - Especialista Senior):**
    *   `admin_agent.py`: Implementación de un grafo de LangGraph que tiene acceso a herramientas críticas (Tools):
        *   `system_health_tool`: Consulta métricas de Redis y latencia (Skill: `corporate-health-auditor`).
        *   `cost_audit_tool`: Desglose de tokens por usuario/modelo (Skill: `token-accountant`).
        *   `cache_manager_tool`: Capacidad de forzar "warm-up" o purgar el Semantic Cache.
        *   `brain_query_tool`: Acceso directo a la memoria vectorial `dude-central-brain`.

## Consecuencias
- **Pros:** Control total soberano desde la web; visibilidad instantánea del ROI; democratización de la gestión técnica para el CEO.
- **Contras:** Aumenta el radio de explosión si la cuenta admin es comprometida (mitigado por MFA obligatorio en Supabase).
