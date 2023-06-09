import { BOOLEAN, INTEGER, Model } from 'sequelize';
import db from '.';
import IMatch from '../../interfaces/IMatch';
import Team from './TeamModel';

class Match extends Model implements IMatch {
  declare readonly id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Match.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  homeTeamId: {
    allowNull: false,
    type: INTEGER,
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamId: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  inProgress: {
    allowNull: false,
    type: BOOLEAN,
  },
}, {
  // ... Outras configs
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'matches',
});

Team.hasMany(Match, {
  foreignKey: 'homeTeamId', as: 'homeTeam',
});

Team.hasMany(Match, {
  foreignKey: 'awayTeamId', as: 'awayTeam',
});

Match.belongsTo(Team, {
  foreignKey: 'homeTeamId', as: 'homeTeam',
});

Match.belongsTo(Team, {
  foreignKey: 'awayTeamId', as: 'awayTeam',
});

export default Match;
