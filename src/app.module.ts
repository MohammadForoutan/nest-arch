import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment/environment.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { DatabaseModule } from './infrastructure/config/database/database.module';
import { UserModule } from './app/user/user.module';

@Module({
  imports: [
    DatabaseModule,
    EnvironmentConfigModule,
    ExceptionsModule,
    LoggerModule,
    // MODULES
    UserModule,
  ],
})
export class AppModule {}
