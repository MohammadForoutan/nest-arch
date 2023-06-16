import type { IFindAllUsersSerialization } from '@domain';
import { Expose } from 'class-transformer';

export class FindAllUsersSerialization implements IFindAllUsersSerialization {
  @Expose()
  declare id: number;

  @Expose()
  declare username: string;

  @Expose()
  declare email: string;

  @Expose()
  declare createDate: Date;
}
