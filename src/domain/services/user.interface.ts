import type { ICreateUserDto } from '../dtos';
import type { IUserModel } from '../models';

export interface IUserService {
  findAll: () => Promise<IUserModel[]>;
  createOne: (dto: ICreateUserDto) => Promise<IUserModel>;
}
