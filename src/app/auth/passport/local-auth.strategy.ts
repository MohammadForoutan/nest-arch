import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './../auth.service';
import { UserEntity } from '@infrastructure';
import { validate } from 'class-validator';
import { LocalLoginDto } from '../dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'usernameOrEmail' });
  }

  async validate(usernameOrEmail, password): Promise<UserEntity> {
    const errors = await validate(
      plainToClass(LocalLoginDto, { usernameOrEmail, password }),
    );
    console.log({ errors });

    return this.authService.validateUser({ usernameOrEmail, password });
  }
}
