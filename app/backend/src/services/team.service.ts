import { ModelStatic } from 'sequelize';
import Team from '../database/models/TeamModel';
import ITeam from '../interfaces/ITeam';
import ITeamService from '../interfaces/ITeamService';

export default class TeamService implements ITeamService {
  protected _teamModel: ModelStatic<Team> = Team;

  constructor() {
    this._teamModel = Team;
  }

  async findAll(): Promise<ITeam[]> {
    const teams = await this._teamModel.findAll();
    return teams;
  }
}
