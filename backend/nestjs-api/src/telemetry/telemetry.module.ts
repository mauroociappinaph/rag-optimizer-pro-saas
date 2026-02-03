import { Module } from '@nestjs/common';
import { TelemetryController } from './telemetry.controller';
import { TelemetryService } from './telemetry.service';
import { SupabaseModule } from '../supabase/supabase.module';
import { AdminModule } from '../admin/admin.module';

@Module({
  imports: [SupabaseModule, AdminModule],
  controllers: [TelemetryController],
  providers: [TelemetryService],
  exports: [TelemetryService],
})
export class TelemetryModule {}

