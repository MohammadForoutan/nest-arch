import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConfigService } from './environment.service';
import { validate } from './environment.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'configs/env/local.env',
      ignoreEnvFile: !(
        process.env['NODE_ENV'] === 'local' ||
        process.env['NODE_ENV'] === 'test'
      ),
      isGlobal: true,
      validate,
    }),
  ],
  providers: [EnvironmentConfigService],
  exports: [EnvironmentConfigService],
})
export class EnvironmentConfigModule {}
