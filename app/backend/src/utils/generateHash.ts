import * as bcrypt from 'bcryptjs';

export default function generateHash(password: string): string {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
  // verificar
}
