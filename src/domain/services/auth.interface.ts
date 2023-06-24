import { Request } from 'express';
import { ILocalRegisterDto, ILocalLoginDto } from '../dtos';
import { IUserEntity } from '../models';
import {
  ILocalLoginSerialization,
  ILocalRegisterSerialization,
} from '../serializations';

export interface IAuthService {
  localRegister: (
    dto: ILocalRegisterDto,
  ) => Promise<ILocalRegisterSerialization>;
  localLogin: (user: IUserEntity) => ILocalLoginSerialization;
  validateUser: (dto: ILocalLoginDto) => Promise<IUserEntity>;
}
