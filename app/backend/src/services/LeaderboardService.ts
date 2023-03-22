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

  // async getTable(): Promise<ILeaderboard[]> {
  //   const teams = await this.teamModel.findAll();
  //   // const matches = await this.matchModel.findAll();

  //   // finishedMatches();

  //   const table1 = teams.map((team: Team) => ({
  //     name: team.dataValues.teamName,
  //     totalGames: 0,
  //     totalPoints: 0,
  //     totalVictories: 0,
  //     totalDraws: 0,
  //     totalLosses: 0,
  //     goalsFavor: 0,
  //     goalsOwn: 0,
  //     goalsBalance: 0,
  //     efficiency: 0,
  //   }));
  //   return table1;
  // }

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
