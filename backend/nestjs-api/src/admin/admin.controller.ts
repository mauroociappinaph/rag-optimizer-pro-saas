import { Controller, Post, Body, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { AdminGuard } from './guards/admin.guard';
import { SkillsService } from './skills.service';

@Controller('admin')
@UseGuards(AdminGuard)
export class AdminController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post('audit/security')
  async runSecurityAudit(@Body() body: { content: string }) {
    return this.executeSkill('security-auditor', body.content);
  }

  @Post('audit/code')
  async runCodeReview(@Body() body: { content: string }) {
    return this.executeSkill('code-review-excellence', body.content);
  }

  @Post('audit/compliance')
  async runComplianceCheck(@Body() body: { content: string }) {
    return this.executeSkill('compliance-legal-sentinel', body.content);
  }

  @Post('audit/agent-eval')
  async runAgentEvaluation(@Body() body: { content: string }) {
    return this.executeSkill('agent-evaluation', body.content);
  }

  private async executeSkill(skillId: string, content: string) {
    try {
      return await this.skillsService.executeSkill(skillId, content);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
