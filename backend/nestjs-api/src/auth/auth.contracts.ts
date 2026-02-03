export interface ApiResponse<T> {
  data?: T;
  meta?: Record<string, any>;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

export class AuthResponseDto {
  user: {
    id: string;
    email: string;
    role: string;
  };
  session: {
    access_token: string;
    refresh_token: string;
  };
}

export class CreateLeadDto {
  email: string;
  monthly_tokens: number;
  estimated_savings: number;
  strategy: string;
}
