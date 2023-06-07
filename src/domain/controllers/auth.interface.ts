export interface IAuthController {
  login: () => { token: string };
  register: () => { token: string };
}
