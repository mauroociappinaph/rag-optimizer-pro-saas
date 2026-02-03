import { Controller, Post, Body, Req } from '@nestjs/common';
import { TelemetryService } from './telemetry.service';

@Controller('telemetry')
export class TelemetryController {
  constructor(private readonly telemetryService: TelemetryService) {}

  @Post('track')
  async track(@Body() body: { event: string; properties?: any; userId?: string }) {
    return this.telemetryService.trackEvent(body.event, body.properties, body.userId);
  }

  @Post('stats') // Usamos POST para mayor flexibilidad en el futuro aunque sea de lectura (Estándar DUDE)
  async getStats() {
    return this.telemetryService.getStats();
  }
}
