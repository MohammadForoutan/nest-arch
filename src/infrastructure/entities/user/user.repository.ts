import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from './user.model';
import { Repository } from 'typeorm';
import { IUserRepository } from '@domain';
import { CreateUserDto } from 'src/app/user/dto';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  createOne(dto: CreateUserDto): Promise<UserModel> {
    const user = this.userRepository.create(dto);
    return this.userRepository.save(user);
  }
}
