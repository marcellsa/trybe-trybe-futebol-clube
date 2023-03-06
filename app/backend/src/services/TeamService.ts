import { ModelStatic } from 'sequelize';
import Team from '../database/models/TeamModel';
// import ITeam from '../interfaces/ITeam';
import ITeamService from '../interfaces/ITeamService';

const ID_NOT_FOUND = 'ID não existe';

export default class TeamService implements ITeamService {
  protected model: ModelStatic<Team> = Team;

  async readAll(): Promise<Team[]> {
    const teams = await this.model.findAll();
    return teams;
  }

  async readById(id: number): Promise<Team> {
    const team = await this.model.findByPk(id);
    if (!team) throw new Error(ID_NOT_FOUND);
    return team;
  }
}
