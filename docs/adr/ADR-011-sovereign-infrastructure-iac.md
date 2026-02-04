# ADR-011: Infraestructura Soberana y Despliegue IaC

**Estatus:** Aceptado
**Fecha:** 2026-02-03

## Contexto
El despliegue manual de microservicios (NestJS + FastAPI + Redis) es propenso a errores humanos, inconsistencias entre entornos y dependencia de nubes públicas específicas. Se requiere un sistema reproducible y versionado que garantice la **Soberanía Técnica**.

## Decisión
Implementar una arquitectura de **Infraestructura como Código (IaC)** basada en Docker:
1.  **Dockerización Total:** Cada componente tiene su propio `Dockerfile` optimizado (Alpine para Node, Slim para Python).
2.  **Orquestación Soberana:** Uso de `docker-compose.yml` para gestionar la red interna (`dude-internal`), volúmenes de datos y dependencias entre servicios.
3.  **Pre-loading de Modelos:** Los modelos de embedding se descargan durante la construcción de la imagen (`docker build`) para asegurar latencia cero al arrancar el contenedor.
4.  **Single Command Launch:** Un script `deploy.sh` centraliza el ciclo de vida del despliegue.

## Consecuencias
- **Pros:** Despliegue en cualquier servidor privado (VPS, Bare Metal) en minutos; paridad total entre desarrollo y producción; seguridad aumentada mediante usuarios no-root en contenedores.
- **Contras:** Requiere que el host tenga Docker y Docker Compose instalados.
