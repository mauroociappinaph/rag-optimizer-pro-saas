import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { SupabaseService } from '../../supabase/supabase.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private supabaseService: SupabaseService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) return false;

    const token = authHeader.split(' ')[1];
    const { data: { user }, error } = await this.supabaseService.getClient().auth.getUser(token);

    if (error || !user) return false;

    // Verificar rol en la tabla profiles
    const { data: profile, error: profileError } = await this.supabaseService
      .getClient()
      .from('profiles')
      .select('role')
      .eq('uid', user.id)
      .single();

    if (profileError || profile?.role !== 'admin') {
      throw new ForbiddenException('Acceso restringido: Se requieren privilegios de Administrador');
    }

    request.user = { ...user, role: profile.role };
    return true;
  }
}
