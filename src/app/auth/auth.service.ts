import type { IAuthService, ILocalLoginDto, ILocalRegisterDto } from '@domain';
import { BcryptService, JwtService, UserEntity } from '@infrastructure';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { isEmail } from 'class-validator';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly userService: UserService,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService,
  ) {}

  public async localRegister(dto: ILocalRegisterDto) {
    const hashPassword = await this.bcryptService.hash(dto.password);

    const user = await this.userService.createOne({
      ...dto,
      password: hashPassword,
    });

    const accessToken = this.jwtService.generateAccessToken({
      username: user.username,
    });

    const refreshToken = this.jwtService.generateRefreshToken({
      username: user.username,
    });

    return { accessToken, refreshToken };
  }

  public async localLogin(dto: ILocalLoginDto) {
    const { password } = dto;
    const isDtoEmail = isEmail(dto.usernameOrEmail);
    let user: UserEntity | null;

    if (isDtoEmail)
      user = await this.userService.findUserByEmail(dto.usernameOrEmail);
    else user = await this.userService.findUserByUsername(dto.usernameOrEmail);

    if (user === null)
      throw new UnauthorizedException(
        'username/email or password is incorrect',
      );

    const isPasswordCorrect = await this.bcryptService.compare({
      raw: password,
      hash: user.password,
    });

    if (isPasswordCorrect === false)
      throw new UnauthorizedException(
        'username/email or password is incorrect, pass',
      );

    const accessToken = this.jwtService.generateAccessToken({
      username: user.username,
    });

    const refreshToken = this.jwtService.generateRefreshToken({
      username: user.username,
    });

    return { accessToken, refreshToken };
  }
}
