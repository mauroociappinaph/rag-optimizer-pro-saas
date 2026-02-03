import { Injectable, OnModuleInit, Logger, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class PaymentService implements OnModuleInit {
  private stripe: Stripe;
  private readonly logger = new Logger(PaymentService.name);

  constructor(
    private configService: ConfigService,
    private supabaseService: SupabaseService,
  ) {}

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

  async createCheckoutSession(userId: string, planId: string, successUrl: string, cancelUrl: string) {
    if (!this.stripe) throw new Error('Stripe is not configured');

    const priceId = this.getPriceId(planId);

    // Using idempotency key patterns for industrial safety
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
      client_reference_id: userId,
      metadata: { userId, planId },
    });

    return { url: session.url };
  }

  async handleWebhook(rawBody: Buffer, signature: string) {
    const webhookSecret = this.configService.get<string>('STRIPE_WEBHOOK_SECRET');
    let event: Stripe.Event;

    try {
      event = this.stripe.webhooks.constructEvent(rawBody, signature, webhookSecret!);
    } catch (err) {
      this.logger.error(`Webhook signature verification failed: ${err.message}`);
      throw new BadRequestException('Invalid signature');
    }

    this.logger.log(`Processing Stripe event: ${event.type}`);

    switch (event.type) {
      case 'checkout.session.completed':
        await this.handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      case 'customer.subscription.deleted':
      case 'customer.subscription.updated':
        await this.handleSubscriptionChanged(event.data.object as Stripe.Subscription);
        break;
      default:
        this.logger.log(`Unhandled event type: ${event.type}`);
    }
  }

  private async handleCheckoutCompleted(session: Stripe.Checkout.Session) {
    const userId = session.client_reference_id;
    const subscriptionId = session.subscription as string;
    const planId = session.metadata?.planId;

    if (!userId) return;

    this.logger.log(`Syncing subscription for user ${userId}: ${planId}`);
    
    // Sync with Supabase profiles table (Industrial Standard)
    await this.supabaseService.getClient()
      .from('profiles')
      .update({ 
        subscription_status: 'active',
        stripe_subscription_id: subscriptionId,
        plan_id: planId
      })
      .eq('uid', userId);
  }

  private async handleSubscriptionChanged(subscription: Stripe.Subscription) {
    const status = subscription.status;
    const subscriptionId = subscription.id;

    this.logger.log(`Subscription ${subscriptionId} status changed to: ${status}`);

    await this.supabaseService.getClient()
      .from('profiles')
      .update({ subscription_status: status })
      .eq('stripe_subscription_id', subscriptionId);
  }

  private getPriceId(planId: string): string {
    const priceMap: Record<string, string | undefined> = {
      'starter': this.configService.get<string>('STRIPE_PRICE_STARTER'),
      'pro': this.configService.get<string>('STRIPE_PRICE_PRO'),
    };

    const priceId = priceMap[planId.toLowerCase()];
    if (!priceId) throw new BadRequestException(`Invalid plan ID: ${planId}`);
    return priceId;
  }
}