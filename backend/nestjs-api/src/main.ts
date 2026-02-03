import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true, // Required for Stripe Webhook Signature Verification
  });
  app.enableCors(); // Industrial standard for frontend-backend communication
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
