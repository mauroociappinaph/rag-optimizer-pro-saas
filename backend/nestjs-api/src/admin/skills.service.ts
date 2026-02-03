import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SkillsService {
  private readonly logger = new Logger(SkillsService.name);
  private readonly workerUrl: string;

  constructor(private configService: ConfigService) {
    this.workerUrl = this.configService.get<string>('PYTHON_WORKER_URL', 'http://localhost:8000');
  }

  async executeSkill(skillId: string, content: string) {
    this.logger.log(`Forwarding skill execution: ${skillId}`);
    try {
      const response = await axios.post(`${this.workerUrl}/skills/execute`, {
        skill_id: skillId,
        content: content,
      });
      return response.data;
    } catch (error) {
      this.logger.error(`Error executing skill ${skillId}: ${error.message}`);
      if (error.response) {
        throw new Error(error.response.data.detail || 'Error from Python worker');
      }
      throw new Error('Could not connect to Python worker');
    }
  }
}
