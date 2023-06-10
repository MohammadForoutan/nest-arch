import type { IDatabaseEnv, IJwtEnv } from '@domain';
import { EnvironmentStats } from '@domain';
import { plainToClass } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsString,
  validateSync,
} from 'class-validator';

class EnvironmentVariables implements IJwtEnv, IDatabaseEnv {
  @IsEnum(EnvironmentStats)
  declare NODE_ENV: EnvironmentStats;

  @IsString()
  declare JWT_SECRET: string;

  @IsString()
  declare JWT_EXPIRATION_TIME: string;

  @IsString()
  declare JWT_REFRESH_TOKEN_SECRET: string;

  @IsString()
  declare JWT_REFRESH_TOKEN_EXPIRATION_TIME: string;

  @IsString()
  declare DATABASE_HOST: string;

  @IsNumber()
  declare DATABASE_PORT: number;

  @IsString()
  declare DATABASE_USER: string;

  @IsString()
  declare DATABASE_PASSWORD: string;

  @IsString()
  declare DATABASE_NAME: string;

  @IsString()
  declare DATABASE_SCHEMA: string;

  @IsBoolean()
  declare DATABASE_SYNCHRONIZE: boolean;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
