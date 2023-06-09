import { Module } from '@nestjs/common';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  EnvironmentConfigModule,
  EnvironmentConfigService,
} from '../environment';

export const getTypeOrmModuleOptions = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions =>
  ({
    type: 'postgres',
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    // entities: ['../../../app/**/*.model.ts'],
    autoLoadEntities: true, // add entity to modules
    synchronize: true,
    schema: process.env['DATABASE_SCHEMA'],
    migrationsRun: true,
    // migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    // cli: {
    //   migrationsDir: 'src/migrations',
    // },
    // ssl: {
    //   rejectUnauthorized: false,
    // },
  } as TypeOrmModuleOptions);

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      useFactory: getTypeOrmModuleOptions,
      inject: [EnvironmentConfigService],
    }),
  ],
})
export class DatabaseModule {}
