import type { IAuthService, IUserEntity } from '@domain';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService implements IAuthService {
  login() {
    return {} as IUserEntity;
  }
}
