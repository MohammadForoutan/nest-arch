import { UserModel } from '@infrastructure';

export interface IUserRepository {
  findAll: () => Promise<UserModel[]>;
}
