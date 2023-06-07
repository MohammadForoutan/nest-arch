import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from './user.model';
import { Repository } from 'typeorm';
import { IUserRepository } from '@domain';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) {}
  findAll() {
    return this.userRepository.find();
  }
}
