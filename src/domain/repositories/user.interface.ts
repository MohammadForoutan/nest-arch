import type { UserEntity } from '@infrastructure';
import type { CreateUserDto } from 'src/app/user/dto';
import type { IBaseRepository } from './base.interface';

export interface IUserRepository extends IBaseRepository<UserEntity> {
  findAll: () => Promise<UserEntity[]>;
  createOne: (dto: CreateUserDto) => Promise<UserEntity>;
}
