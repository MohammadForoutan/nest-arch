import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '../config';
import { BcryptService } from './bcrypt.service';
import { JwtService } from './jwt.service';

@Module({
  imports: [EnvironmentConfigModule],
  providers: [BcryptService, JwtService],
  exports: [BcryptService, JwtService],
})
export class EncryptionModule {}
