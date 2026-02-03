import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getStats() {
    return {
      status: 'operational',
      activeAgents: 4,
      lastAudit: new Date().toISOString(),
    };
  }
}
