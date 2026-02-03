import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResponseDto, ApiResponse } from './auth.contracts';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() body: any): Promise<ApiResponse<AuthResponseDto>> {
    return this.authService.signUp(body.email, body.password);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: any): Promise<ApiResponse<AuthResponseDto>> {
    return this.authService.login(body.email, body.password);
  }
}
