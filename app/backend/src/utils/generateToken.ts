import * as jsonwebtoken from 'jsonwebtoken';
import ILogin from '../interfaces/ILogin';

const jwt = jsonwebtoken;
const secret = String(process.env.JWT_SECRET);

export default function generateToken(user: ILogin) {
  const payload = { user };
  // const secret = String(process.env.JWT_SECRET);
  // const jwt = jsonwebtoken;
  return jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn: '5d' });
}

export function decodeToken(token: string) {
  return jwt.verify(token, secret) as jsonwebtoken.JwtPayload;
}
