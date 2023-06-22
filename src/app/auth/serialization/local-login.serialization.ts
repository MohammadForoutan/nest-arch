import { ILocalLoginSerialization } from '@domain';

export class LocalLoginSerialization implements ILocalLoginSerialization {
  declare accessToken: string;

  declare refreshToken: string;
}
