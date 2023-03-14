import { ModelStatic } from 'sequelize';
import Match from '../database/models/MatchModel';
import IMatch from '../interfaces/IMatch';
import IMatchService from '../interfaces/IMatchService';

export default class MatchService implements IMatchService {
  protected model: ModelStatic<Match> = Match;

  async getAll(): Promise<IMatch[]> {
    const matches = await this.model.findAll();
    return matches;
  }
}
