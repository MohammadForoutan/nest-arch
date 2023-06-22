import type { ICreateUserDto } from '../dtos';
import type { IUserEntity } from '../models';

export interface IUserService {
  createOne: (dto: ICreateUserDto) => Promise<IUserEntity>;
}
