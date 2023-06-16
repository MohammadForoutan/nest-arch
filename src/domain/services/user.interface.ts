import type { ICreateUserDto } from '../dtos';
import type { IUserEntity } from '../models';

export interface IUserService {
  findAll: () => Promise<IUserEntity[]>;
  createOne: (dto: ICreateUserDto) => Promise<IUserEntity>;
}
