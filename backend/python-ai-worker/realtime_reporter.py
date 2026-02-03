import socketio
import asyncio
import os
import logging

# --- Real-time Skill Reporter (2026 Standard) ---
# This client connects to the NestJS Gateway to report internal agent actions

sio = socketio.AsyncClient()
NESTJS_URL = os.getenv("NESTJS_URL", "http://localhost:3000")

logger = logging.getLogger("admin_reporter")

@sio.event
async def connect():
    logger.info("Connected to NestJS Gateway for real-time reporting")

@sio.event
async def disconnect():
    logger.info("Disconnected from NestJS Gateway")

async def report_skill_activation(skill_name: str, status: str = "executing"):
    """Sends a signal to the Admin Dashboard when a skill is used."""
    if not sio.connected:
        try:
            await sio.connect(f"{NESTJS_URL}", namespaces=['/admin'])
        except Exception as e:
            logger.error(f"Failed to connect to reporting gateway: {e}")
            return

    await sio.emit('skill_activated', {
        "skill": skill_name,
        "status": status
    }, namespace='/admin')

async def send_agent_response(content: str):
    """Sends the actual agent reasoning to the frontend via socket."""
    await sio.emit('agent_response', {
        "role": "agent",
        "content": content,
        "timestamp": "now" # NestJS handles real timestamp
    }, namespace='/admin')
