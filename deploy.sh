#!/bin/bash

# --- THE DUDE Deployment Script (Industrial 2026) ---
# Sovereign Infrastructure: Private Docker Orchestration

set -e

echo "🚀 Iniciando Despliegue Soberano de RAG Optimizer Pro..."

# 1. Verificar variables de entorno
if [ ! -f .env ]; then
    echo "❌ Error: Archivo .env no encontrado. Por favor, créalo basándote en backend/nestjs-api/.env.example"
    exit 1
fi

# 2. Construir imágenes optimizadas
echo "🏗️ Construyendo Activos Industriales (Docker Build)..."
docker-compose build --pull

# 3. Lanzar infraestructura en segundo plano
echo "🚢 Lanzando contenedores en modo producción..."
docker-compose up -d

# 4. Verificar Salud
echo "🩺 Verificando integridad del sistema..."
sleep 5
docker-compose ps

echo "✅ DESPLIEGUE COMPLETADO EXITOSAMENTE."
echo "📡 Gateway: http://localhost:3000"
echo "🤖 AI Worker: http://localhost:8000"
echo "💾 Cache: redis://localhost:6379"
