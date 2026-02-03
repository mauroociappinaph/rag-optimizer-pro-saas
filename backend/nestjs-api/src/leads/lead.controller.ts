import { Controller, Post, Body } from '@nestjs/common';
import { LeadService } from './lead.service';
import { CreateLeadDto, ApiResponse } from '../auth/auth.contracts';

@Controller('leads')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Post()
  async captureLead(@Body() dto: CreateLeadDto): Promise<ApiResponse<any>> {
    return this.leadService.createLead(dto);
  }
}
