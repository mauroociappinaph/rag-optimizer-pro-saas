import { Controller, Post, Body, Headers, RawBodyRequest, Req, BadRequestException } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('create-checkout')
  async createCheckout(
    @Body() body: { userId: string; planId: string; successUrl: string; cancelUrl: string }
  ) {
    return this.paymentService.createCheckoutSession(
      body.userId,
      body.planId,
      body.successUrl,
      body.cancelUrl
    );
  }

  @Post('create-portal')
  async createPortal(
    @Body() body: { customerId: string; returnUrl: string }
  ) {
    return this.paymentService.createBillingPortalSession(
      body.customerId,
      body.returnUrl
    );
  }

  @Post('webhook')
  async handleWebhook(
    @Req() req: RawBodyRequest<Request>,
    @Headers('stripe-signature') signature: string,
  ) {
    if (!signature) {
      throw new BadRequestException('Missing stripe-signature header');
    }

    // NestJS rawBody must be enabled in main.ts
    const rawBody = req.rawBody;
    if (!rawBody) {
      throw new BadRequestException('Raw body not available');
    }

    return this.paymentService.handleWebhook(rawBody, signature);
  }
}