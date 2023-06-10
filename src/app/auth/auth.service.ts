import type { IAuthService, IUserModel } from '@domain';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService implements IAuthService {
  login() {
    return {} as IUserModel;
  }
}
