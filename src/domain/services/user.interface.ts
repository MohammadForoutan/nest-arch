import { CreateUserDto } from 'src/app/user/dto';
import { UserModel } from 'src/infrastructure/entities/user/user.model';

export interface IUserService {
  findAll: () => Promise<UserModel[]>;
  createOne: (dto: CreateUserDto) => Promise<UserModel>;
}
