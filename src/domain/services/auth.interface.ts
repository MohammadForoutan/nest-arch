import type { IUserModel } from '../models';

export interface IAuthService {
  login: () => IUserModel;
}
