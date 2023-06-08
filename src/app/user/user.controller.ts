import { IUserController } from '@domain';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { plainToClass } from 'class-transformer';
import { UserModel } from '@infrastructure';
import {
  CreateUserSerialization,
  FindAllUsersSerialization,
} from './serialization';
import { CreateUserDto } from './dto';

@SerializeOptions({ strategy: 'excludeAll' })
@UseInterceptors(ClassSerializerInterceptor)
@Controller('user')
export class UserController implements IUserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    return plainToClass(FindAllUsersSerialization, users);
  }

  @Post()
  async createOne(@Body() dto: CreateUserDto) {
    const user = await this.userService.createOne(dto);
    return plainToClass(CreateUserSerialization, user);
  }
}
