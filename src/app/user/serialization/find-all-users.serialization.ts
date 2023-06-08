import { IFindAllUsersSerialization } from '@domain';
import { Expose } from 'class-transformer';

export class FindAllUsersSerialization implements IFindAllUsersSerialization {
  @Expose()
  id: number;

  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  createDate: Date;
}
