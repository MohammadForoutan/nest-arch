import type {
  IAuthController,
  ILocalLoginDto,
  ILocalLoginSerialization,
  ILocalRegisterSerialization,
} from '@domain';
import { Body, Controller, Post } from '@nestjs/common';
import { LocalRegisterDto } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController implements IAuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  localRegister(
    @Body() dto: LocalRegisterDto,
  ): Promise<ILocalRegisterSerialization> {
    // FIXME: serialization and change Interface of method
    return this.authService.localRegister(dto);
  }

  @Post('login')
  localLogin(@Body() dto: ILocalLoginDto): Promise<ILocalLoginSerialization> {
    return this.authService.localLogin(dto);
  }
}
