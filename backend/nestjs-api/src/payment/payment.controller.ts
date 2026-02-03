import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('create-checkout-session')
  async createCheckoutSession(
    @Body() body: { planId: string; successUrl: string; cancelUrl: string }
  ) {
    return this.paymentService.createCheckoutSession(
      body.planId,
      body.successUrl,
      body.cancelUrl
    );
  }
}
