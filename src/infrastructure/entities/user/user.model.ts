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
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'user_id' })
  readonly id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  readonly createDate: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updateDate: Date;
}
