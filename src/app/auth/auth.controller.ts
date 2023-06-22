import type { IAuthController } from '@domain';
import { Body, Controller, Post } from '@nestjs/common';
import { LocalRegisterDto } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController implements IAuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  localRegister(@Body() dto: LocalRegisterDto) {
    // FIXME: serialization and change Interface of method
    return this.authService.localRegister(dto);
  }
}
