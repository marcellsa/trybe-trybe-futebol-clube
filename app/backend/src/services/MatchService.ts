import { ModelStatic } from 'sequelize';
import Match from '../database/models/MatchModel';
import Team from '../database/models/TeamModel';
import IMatch from '../interfaces/IMatch';
import IMatchService from '../interfaces/IMatchService';
import HttpException from '../utils/HttpException';

export default class MatchService implements IMatchService {
  protected model: ModelStatic<Match> = Match;
  protected teamModel: ModelStatic<Team> = Team;

  async getAll(): Promise<IMatch[]> {
    const matches = await this.model.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  async filterInProgress(query: boolean): Promise<IMatch[]> {
    const matches = await this.model.findAll({
      where: {
        inProgress: query,
      },
      include: [
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  async finishMatch(id: number): Promise<void> {
    await this.model.update(
      { inProgress: false },
      { where: { id } },
    );
  }

  async updateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void> {
    await this.model.update(
      {
        homeTeamGoals,
        awayTeamGoals,
      },
      { where: { id } },
    );
  }

  async createMatch(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<IMatch> {
    if (homeTeamId === awayTeamId) {
      throw new HttpException(422, 'It is not possible to create a match with two equal teams');
    }

    const homeTeamExists = await this.teamModel.findByPk(homeTeamId);
    const awayTeamExists = await this.teamModel.findByPk(awayTeamId);
    if (!homeTeamExists || !awayTeamExists) {
      throw new HttpException(404, 'There is no team with such id!');
    }

    const macthCreated = await this.model
      .create({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals, inProgress: true });

    return macthCreated;
  }
}
