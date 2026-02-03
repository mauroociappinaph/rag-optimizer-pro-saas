import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { SkillsService } from './skills.service';
import { AdminGateway } from './admin.gateway';
import { SupabaseModule } from '../supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [AdminController],
  providers: [AdminService, SkillsService, AdminGateway],
  exports: [AdminService, SkillsService],
})
export class AdminModule {}
