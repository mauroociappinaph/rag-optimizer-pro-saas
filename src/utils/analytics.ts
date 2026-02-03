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
    // Check for production environment or user preferences
    this.isEnabled = !window.location.hostname.includes('localhost');
  }

  public static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  public track(event: EventName, properties?: AnalyticsProperties) {
    if (!this.isEnabled) {
      console.log(`[Analytics-Mock] Tracking ${event}:`, properties);
      return;
    }

    // Industrial standard: Log to persistent store or 3P service
    // Placeholder for PostHog/Mixpanel integration
    try {
      // Example: posthog.capture(event, properties);
      console.info(`[Analytics] ${event}`, properties);
    } catch (error) {
      console.error('[Analytics-Error]', error);
    }
  }

  public identify(userId: string, traits?: Record<string, any>) {
    if (!this.isEnabled) {
      console.log(`[Analytics-Mock] Identify ${userId}:`, traits);
      return;
    }
    console.info(`[Analytics] Identified user: ${userId}`);
  }
}

export const analytics = AnalyticsService.getInstance();
