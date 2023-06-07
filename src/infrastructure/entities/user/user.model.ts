import { IUserModel } from '@domain';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserModel implements IUserModel {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
  })
  username: string;

  @Column({
    name: 'email',
    nullable: false,
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  createDate: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updateDate: Date;
}
