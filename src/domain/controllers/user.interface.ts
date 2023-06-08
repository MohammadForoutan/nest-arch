import { CreateUserDto } from 'src/app/user/dto';
import {
  ICreateUserSerialization,
  IFindAllUsersSerialization,
} from '../serializations';

export interface IUserController {
  findAll: () => Promise<IFindAllUsersSerialization[]>;
  createOne: (dto: CreateUserDto) => Promise<ICreateUserSerialization>;
}
