import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UseGuards, Logger } from '@nestjs/common';
import { AdminGuard } from './guards/admin.guard';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'admin',
})
export class AdminGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('AdminGateway');

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
    // Authentication logic could be added here in the handshake
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('command')
  // @UseGuards(AdminGuard) // Future: Secure socket messages
  handleCommand(client: Socket, payload: { message: string }): void {
    this.logger.log(`Received command from ${client.id}: ${payload.message}`);
    
    // Skill usage simulation for now, real Python worker link coming next
    this.server.emit('skill_activated', { 
      skill: payload.message.includes('roi') ? 'token-accountant' : 'observability-engineer',
      status: 'executing'
    });

    // Echo back to client
    this.server.emit('agent_response', {
      role: 'agent',
      content: `Comando recibido: "${payload.message}". Procesando con protocolos senior...`,
      timestamp: new Date()
    });
  }

  // Method to be called from services to broadcast state
  broadcastSystemHealth(healthData: any) {
    this.server.emit('system_health', healthData);
  }
}
