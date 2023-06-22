import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '../config';
import { BcryptService } from './bcrypt.service';

@Module({
  imports: [EnvironmentConfigModule],
  providers: [BcryptService],
  exports: [BcryptService],
})
export class EncryptionModule {}
