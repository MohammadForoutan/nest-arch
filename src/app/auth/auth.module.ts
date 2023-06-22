import { Module } from '@nestjs/common';
import { EncryptionModule } from 'src/infrastructure/encryption/encryption.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [EncryptionModule],
})
export class AuthModule {}
