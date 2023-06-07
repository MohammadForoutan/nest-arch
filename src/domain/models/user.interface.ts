export interface IUserModel {
  readonly id: number;
  username: string;
  password: string;
  readonly createDate: Date;
  updateDate: Date;
}
