import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from './user.model';
import { Repository } from 'typeorm';
import type { ICreateUserDto, IUserRepository } from '@domain';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  createOne(dto: ICreateUserDto): Promise<UserModel> {
    const user = this.userRepository.create(dto);
    return this.userRepository.save(user);
  }
}
