import { ModelStatic } from 'sequelize';
import Match from '../database/models/MatchModel';
import Team from '../database/models/TeamModel';
import IMatch from '../interfaces/IMatch';
import IMatchService from '../interfaces/IMatchService';

export default class MatchService implements IMatchService {
  protected model: ModelStatic<Match> = Match;

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
}
