import type { ICreateUserDto, IUserService } from '@domain';
import { ConflictException, Injectable } from '@nestjs/common';
import { UserEntity, UserRepository } from '@infrastructure';

interface IUsernameOrPassword {
  username?: string;
  email?: string;
}
@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}

  public findUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  public findUserByUsername(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  public findUserByEmailOrUsername({ username, email }: IUsernameOrPassword) {
    if (!username && !email) return null;

    return this.userRepository.findOne({
      where: [{ username }, { email }],
    });
  }

  public async createOne(dto: ICreateUserDto): Promise<UserEntity> {
    const user = await this.findUserByEmailOrUsername({ ...dto });

    if (user !== null) {
      throw new ConflictException('username or email is already taken');
    }

    const newUser = this.userRepository.createOne(dto);
    return this.userRepository.save(newUser);
  }
}
