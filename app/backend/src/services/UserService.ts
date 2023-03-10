import * as bcrypt from 'bcryptjs';
import { ModelStatic } from 'sequelize';
import User from '../database/models/UserModel';
import IUserService from '../interfaces/IUserService';
import generateToken from '../utils/generateToken';
import HttpException from '../utils/HttpException';

export default class UserService implements IUserService {
  protected model: ModelStatic<User> = User;

  async login(email: string, password: string): Promise<string | undefined> {
    const userFound = await this.model.findOne({ where: { email } });

    // const ecryptedPassword = bcrypt.compareSync(password, userFound.password);
    if (userFound && bcrypt.compareSync(password, userFound.password)) {
      const token = generateToken(userFound);
      return token;
    }
    throw new HttpException(401, 'Invalid email or password');
  }

  async getRole(email: string): Promise<string | void> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) {
      throw new HttpException(401, 'Invalid email or password');
    }
    return user.role;
  }
}
