import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  declare readonly id: number;
  declare username: string;
  declare email: string;
  declare role: string;
  declare password: string;
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  username: {
    allowNull: false,
    type: STRING,
  },
  email: {
    allowNull: false,
    type: STRING,
  },
  role: {
    allowNull: false,
    type: STRING,
  },
  password: {
    allowNull: false,
    type: STRING,
  },
}, {
  // ... Outras configs
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'users',
});

export default User;
