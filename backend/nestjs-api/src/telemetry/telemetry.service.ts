import { Injectable, Logger } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class TelemetryService {
  private readonly logger = new Logger(TelemetryService.name);

  constructor(private supabaseService: SupabaseService) {}

  async trackEvent(eventName: string, properties: any, userId?: string) {
    const client = this.supabaseService.getClient();

    this.logger.log(`Tracking event: ${eventName}`);

    const { error } = await client
      .from('telemetry')
      .insert([
        {
          event_name: eventName,
          properties,
          user_id: userId,
          created_at: new Date().toISOString()
        },
      ]);

    if (error) {
      this.logger.error(`Error tracking event ${eventName}: ${error.message}`);
      throw error;
    }

    return { success: true };
  }
}
