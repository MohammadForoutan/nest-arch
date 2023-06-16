import type { IUserEntity } from '@domain';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserEntity implements IUserEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'user_id' })
  declare readonly id: number;

  @Column({ unique: true })
  declare username: string;

  @Column()
  declare email: string;

  @Column()
  declare password: string;

  @CreateDateColumn({ type: 'timestamp' })
  declare readonly createDate: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  declare updateDate: Date;
}
