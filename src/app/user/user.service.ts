import { IUserService } from '@domain';
import { UserRepository } from '../../infrastructure/entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}

  findAll() {
    return this.userRepository.findAll();
  }
}
