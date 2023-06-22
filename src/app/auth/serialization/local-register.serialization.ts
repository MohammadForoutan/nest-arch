import { ILocalRegisterSerialization } from '@domain';

export class LocalRegister implements ILocalRegisterSerialization {
  declare accessToken: string;

  declare refreshToken: string;
}
