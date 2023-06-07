import { UserModel } from 'src/infrastructure/entities/user/user.model';

export interface IUserController {
  findAll: () => Promise<UserModel[]>;
}
