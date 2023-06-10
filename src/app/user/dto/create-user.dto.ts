import type { ICreateUserDto } from '@domain';
import { IsString, MinLength } from 'class-validator';

export class CreateUserDto implements ICreateUserDto {
  @IsString()
  @MinLength(2) // just for test TODO: improve here
  declare username: string;

  @IsString()
  declare email: string;

  @IsString() // to prevent error, at least one validation should exist
  declare password: string;
}
