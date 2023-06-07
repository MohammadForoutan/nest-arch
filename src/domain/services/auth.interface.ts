import { IUserModel } from '../models';

export interface IAuthService {
  login: () => IUserModel;
}
