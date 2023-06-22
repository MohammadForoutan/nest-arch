import { ILocalRegisterDto, ILocalLoginDto } from '../dtos';

export interface IAuthService {
  localRegister: (dto: ILocalRegisterDto) => Promise<{
    accessToken: string;
    refreshToken: string;
  }>;

  localLogin: (dto: ILocalLoginDto) => Promise<{
    accessToken: string;
    refreshToken: string;
  }>;
}
