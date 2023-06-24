import type {
  IAuthService,
  ILocalLoginDto,
  ILocalRegisterDto,
  IUserEntity,
} from '@domain';
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

    await this.userService.createOne({
      ...dto,
      password: hashPassword,
    });
    const { accessToken, refreshToken } =
      this.jwtService.generateAccessAndRefreshToken({ username: dto.username });
    return { accessToken, refreshToken };
  }

  public localLogin(user: IUserEntity) {
    return this.jwtService.generateAccessAndRefreshToken({
      username: user.username,
    });
  }

  public async validateUser(dto: ILocalLoginDto): Promise<UserEntity> {
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

    return user;
  }
}
