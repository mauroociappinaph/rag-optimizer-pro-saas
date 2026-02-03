import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class PaymentService implements OnModuleInit {
  private stripe: Stripe;
  private readonly logger = new Logger(PaymentService.name);

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    const apiKey = this.configService.get<string>('STRIPE_SECRET_KEY');
    if (!apiKey) {
      this.logger.warn('STRIPE_SECRET_KEY missing. Payment functionality will be disabled.');
      return;
    }
    this.stripe = new Stripe(apiKey, {
      apiVersion: '2025-01-27.acacia' as any,
    });
  }

  async createCheckoutSession(planId: string, successUrl: string, cancelUrl: string) {
    if (!this.stripe) {
      throw new Error('Stripe is not configured');
    }

    const priceId = this.getPriceId(planId);

    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return { url: session.url };
  }

  private getPriceId(planId: string): string {
    const priceMap: Record<string, string | undefined> = {
      'starter': this.configService.get<string>('STRIPE_PRICE_STARTER'),
      'pro': this.configService.get<string>('STRIPE_PRICE_PRO'),
    };

    const priceId = priceMap[planId.toLowerCase()];
    if (!priceId) {
      this.logger.error(`Plan not configured in Stripe: ${planId}`);
      throw new Error(`Invalid plan ID: ${planId}`);
    }
    return priceId;
  }
}
