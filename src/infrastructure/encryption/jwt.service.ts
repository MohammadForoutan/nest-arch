import { IJwtPayload, IJwtService } from '@domain';
import { Injectable } from '@nestjs/common';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { EnvironmentConfigService } from '../config';

@Injectable()
export class JwtService implements IJwtService {
  constructor(private readonly configureService: EnvironmentConfigService) {}

  public generateAccessToken(data: IJwtPayload): string {
    const accessTokenSecret = this.configureService.getJwtSecret();
    const accessTokenExpireIn = this.configureService.getJwtExpirationTime();

    return jwt.sign(data, accessTokenSecret, {
      expiresIn: accessTokenExpireIn,
    });
  }

  public generateRefreshToken(data: IJwtPayload): string {
    const refreshTokenSecret = this.configureService.getJwtRefreshSecret();
    const refreshTokenExpireIn =
      this.configureService.getJwtRefreshExpirationTime();
    return jwt.sign(data, refreshTokenSecret, {
      expiresIn: refreshTokenExpireIn,
    });
  }

  public verifyAccessToken(token: string): string | JwtPayload {
    const accessTokenSecret = this.configureService.getJwtSecret();
    return jwt.verify(token, accessTokenSecret);
  }

  public verifyRefreshToken(token: string): string | JwtPayload {
    const refreshTokenSecret = this.configureService.getJwtRefreshSecret();
    return jwt.verify(token, refreshTokenSecret);
  }
}
