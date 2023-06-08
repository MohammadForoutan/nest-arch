import { IUserService } from '@domain';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UserRepository } from '@infrastructure';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}

  findAll() {
    return this.userRepository.findAll();
  }

  createOne(dto: CreateUserDto) {
    return this.userRepository.createOne(dto);
  }
}
