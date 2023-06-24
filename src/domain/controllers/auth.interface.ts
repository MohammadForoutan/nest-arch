import { ILocalLoginDto, ILocalRegisterDto } from '../dtos';
import {
  ILocalLoginSerialization,
  ILocalRegisterSerialization,
} from '../serializations';

export interface IAuthController {
  localRegister: (
    dto: ILocalRegisterDto,
  ) => Promise<ILocalRegisterSerialization>;

  localLogin: (dto: ILocalLoginDto) => Promise<ILocalLoginSerialization>;
}
