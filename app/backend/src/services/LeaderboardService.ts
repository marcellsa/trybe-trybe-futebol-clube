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

    const finishedMatches = matches.filter((match: Match) => match.dataValues.inProgress === false);

    const tableHome = generateTable(teams, finishedMatches, 'home');

    return sortTable(tableHome);
  }

  async awayPerfomance(): Promise<ILeaderboard[]> {
    const teams = await this.teamModel.findAll();
    const matches = await this.matchModel.findAll();

    const finishedMatches = matches.filter((match: Match) => match.dataValues.inProgress === false);

    const tableAway = generateTable(teams, finishedMatches, 'away');

    return sortTable(tableAway);
  }
}
