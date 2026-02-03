# ADR-006: Gestión de Estado Centralizado con Zustand

**Estatus:** Aceptado
**Fecha:** 2026-02-03

## Contexto
El simulador de ROI y el Dashboard de observabilidad compartían lógica y datos, pero estaban desacoplados a nivel de estado de React. Esto causaba una experiencia fragmentada donde los cambios en el simulador no se reflejaban en la "salud" proyectada del sistema.

## Decisión
Implementar **Zustand** como el motor de estado global:
1. **Store Unificado:** Crear `useROIStore.ts` como la fuente de verdad para parámetros de tokens, estrategias y resultados calculados.
2. **Reactividad Cruzada:** Permitir que múltiples componentes consuman y actualicen el estado sin necesidad de "Prop Drilling".
3. **Persistencia (Opcional):** Habilitar el middleware de persistencia para que el escenario configurado por el usuario se mantenga tras recargar la página.

## Consecuencias
- **Pros:** Interfaz coherente y dinámica; reducción de lógica duplicada en componentes; facilidad para debugear flujos de datos.
- **Contras:** Introduce una dependencia externa adicional (ligera).
