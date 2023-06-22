import { ILocalLoginDto } from '@domain';
import { IsEmail, IsString, MinLength, ValidateIf } from 'class-validator';

export class LocalLoginDto implements ILocalLoginDto {
  @IsString()
  @MinLength(3)
  @ValidateIf((o) => o.email === undefined || o.username)
  declare username?: string;

  @IsEmail()
  @ValidateIf((o) => o.phone === undefined || o.email)
  declare email?: string;

  @IsString()
  @MinLength(4)
  declare password: string;
}
