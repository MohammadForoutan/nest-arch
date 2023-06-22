import { ILocalRegisterDto } from '../dtos';
import { ILocalRegisterSerialization } from '../serializations';

export interface IAuthController {
  localRegister: (
    dto: ILocalRegisterDto,
  ) => Promise<ILocalRegisterSerialization>;
}
