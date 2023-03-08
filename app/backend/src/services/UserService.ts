import { ModelStatic } from 'sequelize';
import User from '../database/models/UserModel';
import IUserService from '../interfaces/IUserService';
import generateToken from '../utils/generateToken';

export default class UserService implements IUserService {
  protected model: ModelStatic<User> = User;
  async login(email: string, password: string): Promise<string | undefined> {
    const user = await this.model.findOne({ where: { email } });
    console.log(user);
    if (user) {
      const token = generateToken(user);
      return token;
    }
    console.log(password);
  }
}
