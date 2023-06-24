import type { IAuthController } from '@domain';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalLoginDto, LocalRegisterDto } from './dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './passport';

@Controller('auth')
export class AuthController implements IAuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  localRegister(@Body() dto: LocalRegisterDto) {
    // FIXME: serialization and change Interface of method
    return this.authService.localRegister(dto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  localLogin(@Request() req, @Body() dto: LocalLoginDto) {
    return this.authService.localLogin(req.user);
  }
}
