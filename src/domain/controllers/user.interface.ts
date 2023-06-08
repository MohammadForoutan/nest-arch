import { UserModel } from '@infrastructure';

export interface IUserController {
  findAll: () => Promise<UserModel[]>;
}
