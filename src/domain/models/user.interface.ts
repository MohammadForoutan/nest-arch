export interface IUserEntity {
  readonly id: number;
  username: string;
  password: string;
  readonly createDate: Date;
  updateDate: Date;
}
