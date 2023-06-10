/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * we check environment values in validate
 */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import type { IDatabaseConfigService, IJwtConfigService } from '@domain';

@Injectable()
export class EnvironmentConfigService
  implements IDatabaseConfigService, IJwtConfigService
{
  constructor(private configService: ConfigService) {}

  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET')!;
  }

  getJwtExpirationTime(): string {
    return this.configService.get<string>('JWT_EXPIRATION_TIME')!;
  }

  getJwtRefreshSecret(): string {
    return this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET')!;
  }

  getJwtRefreshExpirationTime(): string {
    return this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRATION_TIME')!;
  }

  getDatabaseHost(): string {
    return this.configService.get<string>('DATABASE_HOST')!;
  }

  getDatabasePort(): number {
    return this.configService.get<number>('DATABASE_PORT')!;
  }

  getDatabaseUser(): string {
    return this.configService.get<string>('DATABASE_USER')!;
  }

  getDatabasePassword(): string {
    return this.configService.get<string>('DATABASE_PASSWORD')!;
  }

  getDatabaseName(): string {
    return this.configService.get<string>('DATABASE_NAME')!;
  }

  getDatabaseSchema(): string {
    return this.configService.get<string>('DATABASE_SCHEMA')!;
  }

  getDatabaseSync(): boolean {
    return this.configService.get<boolean>('DATABASE_SYNCHRONIZE')!;
  }
}
