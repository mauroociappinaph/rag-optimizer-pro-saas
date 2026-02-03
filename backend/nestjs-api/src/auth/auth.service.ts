import { Injectable, BadRequestException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { AuthResponseDto, ApiResponse } from './auth.contracts';

@Injectable()
export class AuthService {
  constructor(private supabaseService: SupabaseService) {}

  async signUp(email: string, password: string): Promise<ApiResponse<AuthResponseDto>> {
    const { data, error } = await this.supabaseService.getClient().auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new BadRequestException(error.message);
    }

    if (data.user) {
      // Sincronización manual con la tabla profiles (si no hay trigger)
      const { error: profileError } = await this.supabaseService
        .getClient()
        .from('profiles')
        .insert([
          {
            uid: data.user.id,
            role: 'user',
            created_at: new Date().toISOString(),
          },
        ]);

      if (profileError) {
        console.error('Error al crear perfil:', profileError);
      }
    }

    return {
      data: {
        user: {
          id: data.user?.id || '',
          email: data.user?.email || '',
          role: 'user',
        },
        session: {
          access_token: data.session?.access_token || '',
          refresh_token: data.session?.refresh_token || '',
        },
      },
    };
  }

  async login(email: string, password: string): Promise<ApiResponse<AuthResponseDto>> {
    const { data, error } = await this.supabaseService.getClient().auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new BadRequestException(error.message);
    }

    return {
      data: {
        user: {
          id: data.user?.id || '',
          email: data.user?.email || '',
          role: 'user',
        },
        session: {
          access_token: data.session?.access_token || '',
          refresh_token: data.session?.refresh_token || '',
        },
      },
    };
  }
}
