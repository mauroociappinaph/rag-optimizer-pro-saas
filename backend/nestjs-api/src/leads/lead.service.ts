import { Injectable, BadRequestException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateLeadDto, ApiResponse } from '../auth/auth.contracts';

@Injectable()
export class LeadService {
  constructor(private supabaseService: SupabaseService) {}

  async createLead(dto: CreateLeadDto): Promise<ApiResponse<any>> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('leads')
      .insert([
        {
          contact_email: dto.email,
          company_name: 'Prospect from Simulator',
          estimated_value: dto.estimated_savings,
          intel_report: `Strategy: ${dto.strategy} | Monthly Tokens: ${dto.monthly_tokens}`,
          status: 'NEW',
          email_status: 'NOT_SENT'
        }
      ])
      .select();

    if (error) {
      throw new BadRequestException(`Failed to capture lead: ${error.message}`);
    }

    return {
      data: data[0],
      meta: { timestamp: new Date().toISOString() }
    };
  }
}
