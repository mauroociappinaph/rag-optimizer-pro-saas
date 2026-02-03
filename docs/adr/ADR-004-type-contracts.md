# ADR-004: Blindaje de Tipos y Contratos Globales

**Estatus:** Aceptado
**Fecha:** 2026-02-03

## Contexto
A medida que el SaaS crece y separamos los datos de la vista (Fase A de industrialización), surge el riesgo de inconsistencias en la UI por cambios manuales en archivos de datos.

## Decisión
Implementar un sistema de contratos de tipos estrictos en `src/types/index.ts`. Todos los archivos de datos (`src/data/`) y motores de lógica (`src/utils/`) deben implementar estas interfaces obligatoriamente.

## Consecuencias
- **Pros:** Prevención de errores en tiempo de ejecución; facilidad para integrar el backend (contratos predefinidos); autodocumentación del código.
- **Contras:** Requiere un pequeño overhead inicial al definir nuevas estructuras de datos.
