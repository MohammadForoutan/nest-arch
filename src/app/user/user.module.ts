import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel, UserRepository } from '@infrastructure';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  providers: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}
