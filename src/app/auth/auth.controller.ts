import { IAuthController } from '@domain';
import { Controller } from '@nestjs/common';

@Controller('auth')
export class AuthController implements IAuthController {
  login() {
    return { token: 'token' };
  }

  register() {
    return { token: 'token' };
  }
}
