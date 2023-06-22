import { JwtPayload } from 'jsonwebtoken';

export interface IJwtPayload extends JwtPayload {
  username: string;
}

export interface IJwtService {
  generateAccessToken: (data: IJwtPayload) => string;
  generateRefreshToken: (data: IJwtPayload) => string;
  verifyAccessToken: (token: string) => string | JwtPayload;
}
