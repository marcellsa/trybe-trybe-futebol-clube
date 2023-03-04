import { ModelStatic } from 'sequelize';
import Team from '../database/models/TeamModel';
// import ITeam from '../interfaces/ITeam';
import ITeamService from '../interfaces/ITeamService';

export default class TeamService implements ITeamService {
  protected model: ModelStatic<Team> = Team;

  async readAll(): Promise<Team[]> {
    const teams = await this.model.findAll();
    return teams;
  }
}
