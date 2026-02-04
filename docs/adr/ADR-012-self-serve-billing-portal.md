# ADR-012: Implementación de Portal de Facturación Self-Serve

**Estatus:** Aceptado
**Fecha:** 2026-02-03

## Contexto
Los usuarios necesitan una forma de gestionar sus suscripciones (cambiar de plan, actualizar tarjetas de crédito, descargar facturas) sin intervención manual del soporte técnico de THE DUDE.

## Decisión
Implementar la integración con el **Stripe Billing Portal**:
1.  **Backend (NestJS):** Exponer endpoint `/payments/create-portal` que genera una sesión segura de Stripe asociada al `customerId`.
2.  **Frontend (Next.js):** Añadir botón de acceso en el Dashboard principal.
3.  **Seguridad:** El portal redirige automáticamente al usuario de vuelta al Dashboard tras completar sus gestiones.

## Consecuencias
- **Pros:** Autonomía total para el usuario; reducción de carga operativa para el CEO; cumplimiento de estándares SaaS 2026.
- **Contras:** Requiere que el ID de cliente de Stripe esté sincronizado en la tabla `profiles` de Supabase.
