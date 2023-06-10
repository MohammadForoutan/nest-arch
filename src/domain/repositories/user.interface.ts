import type { UserModel } from '@infrastructure';
import type { CreateUserDto } from 'src/app/user/dto';

export interface IUserRepository {
  findAll: () => Promise<UserModel[]>;
  createOne: (dto: CreateUserDto) => Promise<UserModel>;
}
