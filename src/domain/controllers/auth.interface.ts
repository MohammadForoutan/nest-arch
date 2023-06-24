import { Request } from 'express';
import { ILocalLoginDto, ILocalRegisterDto } from '../dtos';
import {
  ILocalLoginSerialization,
  ILocalRegisterSerialization,
} from '../serializations';

export interface IAuthController {
  localRegister: (
    dto: ILocalRegisterDto,
  ) => Promise<ILocalRegisterSerialization>;

  localLogin: (req: Request, dto: ILocalLoginDto) => ILocalLoginSerialization;
}
