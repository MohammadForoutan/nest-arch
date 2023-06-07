import { UserModel } from 'src/infrastructure/entities/user/user.model';

export interface IUserService {
  findAll: () => Promise<UserModel[]>;
}
