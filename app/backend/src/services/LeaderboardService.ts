import { ModelStatic } from 'sequelize';
import Match from '../database/models/MatchModel';
import Team from '../database/models/TeamModel';
import ILeaderboard from '../interfaces/ILeaderboard';
import ILeaderboardService from '../interfaces/ILeaderboardService';
import generateTable from '../utils/leaderboard/generateTable';
import sortTable from '../utils/leaderboard/sortTable';

// Tive suporte de Arthur Costa
export default class LeaderboardService implements ILeaderboardService {
  protected teamModel: ModelStatic<Team> = Team;
  protected matchModel: ModelStatic<Match> = Match;

  async homePerfomance(): Promise<ILeaderboard[]> {
    const teams = await this.teamModel.findAll();
    const matches = await this.matchModel.findAll();

    const finishedMatches = matches.map((match: Match) => {
      if (match.dataValues.inProgress === false) {
        return match.dataValues;
      }
      return {};
    });

    const tableHome = generateTable(teams, finishedMatches, 'home');

    return sortTable(tableHome);
  }

  async awayPerfomance(): Promise<ILeaderboard[]> {
    const teams = await this.teamModel.findAll();
    const matches = await this.matchModel.findAll();

    const finishedMatchesAway = matches.map((match: Match) => {
      if (match.dataValues.inProgress !== true) {
        return match.dataValues;
      }
      return {};
    });

    const tableAway = generateTable(teams, finishedMatchesAway, 'away');

    return sortTable(tableAway);
  }
}
