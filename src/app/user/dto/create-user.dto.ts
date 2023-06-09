import { ICreateUserDto } from '@domain';
import { IsString, MinLength } from 'class-validator';

export class CreateUserDto implements ICreateUserDto {
  @IsString()
  @MinLength(2) // just for test TODO: improve here
  username: string;

  email: string;

  password: string;
}
