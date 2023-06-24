import { Module } from '@nestjs/common';
import { EncryptionModule } from 'src/infrastructure/encryption/encryption.module';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './passport';

@Module({
  imports: [EncryptionModule, UserModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
