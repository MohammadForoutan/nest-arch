import type { ICreateUserDto, IUserService } from '@domain';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '@infrastructure';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}

  findAll() {
    return this.userRepository.findAll();
  }

  createOne(dto: ICreateUserDto) {
    return this.userRepository.createOne(dto);
  }
}
