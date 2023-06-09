import { UserModel } from '@infrastructure';
import { CreateUserDto } from 'src/app/user/dto';

export interface IUserRepository {
  findAll: () => Promise<UserModel[]>;
  createOne: (dto: CreateUserDto) => Promise<UserModel>;
}
