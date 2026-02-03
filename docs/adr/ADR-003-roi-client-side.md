# ADR-003: Motor de ROI Client-Side

**Estatus:** Aceptado
**Fecha:** 2026-02-03

## Contexto
El simulador de ROI es la principal herramienta de captura de leads. Requiere una respuesta instantánea a los cambios del usuario (latencia cero) para maximizar el engagement.

## Decisión
Implementar la lógica de cálculo de ROI (`roi-engine.ts`) exclusivamente en el lado del cliente (Frontend/React 19).

## Consecuencias
- **Pros:** Interfaz ultra-reactiva; ahorro de recursos de servidor; privacidad de datos del usuario (los datos sensibles no se envían al servidor a menos que el usuario convierta).
- **Contras:** La lógica es visible en el bundle de JS (no es un riesgo para este caso de uso matemático simple).
