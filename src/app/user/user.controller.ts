import type { IUserController } from '@domain';
import {
  ClassSerializerInterceptor,
  Controller,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';

@SerializeOptions({ strategy: 'excludeAll' })
@UseInterceptors(ClassSerializerInterceptor)
@Controller('user')
export class UserController implements IUserController {
  constructor(private userService: UserService) {}
}
