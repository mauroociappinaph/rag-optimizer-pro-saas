/**
 * THE DUDE Analytics Service - 2026 Standard
 * Centralized telemetry for lead conversion and ROI simulation.
 */

type EventName =
  | 'roi_sim_change'
  | 'roi_sim_capture_click'
  | 'roi_sim_capture_success'
  | 'auth_signup_attempt'
  | 'auth_login_attempt'
  | 'page_view';

interface AnalyticsProperties {
  [key: string]: string | number | boolean | undefined;
}

class AnalyticsService {
  private static instance: AnalyticsService;
  private isEnabled: boolean = true;

  private constructor() {
    // Industrial standard: Target the centralized API Registry
    this.isEnabled = true; // Enabled for all environments to ensure data capture
  }

  public static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  public async track(event: EventName, properties?: AnalyticsProperties) {
    if (!this.isEnabled) {
      console.log(`[Analytics-Mock] Tracking ${event}:`, properties);
      return;
    }

    try {
      await fetch('http://localhost:3000/telemetry/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event, properties }),
      });
      console.info(`[Analytics] ${event}`, properties);
    } catch (error) {
      console.error('[Analytics-Error]', error);
    }
  }

  public identify(userId: string, traits?: Record<string, any>) {
    console.info(`[Analytics] Identified user: ${userId}`, traits);
    // Identification logic can be expanded here as needed
  }
}

export const analytics = AnalyticsService.getInstance();
