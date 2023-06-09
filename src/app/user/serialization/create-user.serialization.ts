import { ICreateUserSerialization } from '@domain';
import { Expose } from 'class-transformer';

export class CreateUserSerialization implements ICreateUserSerialization {
  @Expose()
  id: number;

  @Expose()
  username: string;

  @Expose()
  createDate: Date;
}
