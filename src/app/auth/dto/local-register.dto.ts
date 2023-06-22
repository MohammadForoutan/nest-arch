import { ILocalRegisterDto } from '@domain';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LocalRegisterDto implements ILocalRegisterDto {
  @IsString()
  @MinLength(3)
  declare username: string;

  @IsEmail()
  declare email: string;

  @IsString()
  @MinLength(4)
  declare password: string;
}
