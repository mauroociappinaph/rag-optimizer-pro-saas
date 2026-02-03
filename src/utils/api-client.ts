import { CreateLeadDto, AuthResponseDto, ApiResponse } from '../../backend/nestjs-api/src/auth/auth.contracts';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function captureLeadApi(dto: CreateLeadDto) {
  const response = await fetch(`${API_BASE_URL}/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dto),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to capture lead');
  }

  return response.json();
}

export async function loginApi(email: string, password: string): Promise<ApiResponse<AuthResponseDto>> {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }

  return response.json();
}

export async function signUpApi(email: string, password: string): Promise<ApiResponse<AuthResponseDto>> {
  const response = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();

export async function createCheckoutApi(userId: string, planId: string) {
  const response = await fetch(`${API_BASE_URL}/payments/create-checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      planId,
      successUrl: `${window.location.origin}/#/dashboard?payment=success`,
      cancelUrl: `${window.location.origin}/#/precios?payment=cancelled`,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create checkout session');
  }

  return response.json();
}

