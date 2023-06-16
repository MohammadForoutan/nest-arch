import type { IUserEntity } from '../models';

export interface IAuthService {
  login: () => IUserEntity;
}
