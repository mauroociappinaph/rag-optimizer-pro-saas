import { CreateLeadDto } from '../../backend/nestjs-api/src/auth/auth.contracts';

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
