import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment/environment.module';
import { LoggerModule } from './infrastructure/logging/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { DatabaseModule } from './infrastructure/config/database/database.module';
import { UserModule } from './app/user/user.module';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    EnvironmentConfigModule,
    ExceptionsModule,
    LoggerModule,
    // MODULES
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
