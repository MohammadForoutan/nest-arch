import { ILocalLoginDto } from '@domain';
import { IsString, MinLength } from 'class-validator';

export class LocalLoginDto implements ILocalLoginDto {
  @IsString()
  @MinLength(3)
  declare usernameOrEmail: string;

  @IsString()
  @MinLength(4)
  declare password: string;
}
