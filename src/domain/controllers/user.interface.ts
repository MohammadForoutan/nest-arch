import type { CreateUserDto } from 'src/app/user/dto';
import type {
  ICreateUserSerialization,
  IFindAllUsersSerialization,
} from '../serializations';

export interface IUserController {
  findAll: () => Promise<IFindAllUsersSerialization[]>;
  createOne: (dto: CreateUserDto) => Promise<ICreateUserSerialization>;
}
