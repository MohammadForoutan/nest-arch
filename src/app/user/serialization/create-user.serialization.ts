import type { ICreateUserSerialization } from '@domain';
import { Expose } from 'class-transformer';

export class CreateUserSerialization implements ICreateUserSerialization {
  @Expose()
  declare id: number;

  @Expose()
  declare username: string;

  @Expose()
  declare createDate: Date;
}
