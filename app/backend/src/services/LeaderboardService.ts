import { ModelStatic } from 'sequelize';
import Match from '../database/models/MatchModel';
import Team from '../database/models/TeamModel';
import ILeaderboard from '../interfaces/ILeaderboard';
import ILeaderboardService from '../interfaces/ILeaderboardService';
import getEfficiency from '../utils/leaderboard/getEfficiency';
import getGoalsBalance from '../utils/leaderboard/getGoalsBalance';
import getGoalsFavor from '../utils/leaderboard/getGoalsFavor';
import getGoalsOwn from '../utils/leaderboard/getGoalsOwn';
import getTotalDraw from '../utils/leaderboard/getTotalDraw';
import getTotalGames from '../utils/leaderboard/getTotalGames';
import getTotalLosses from '../utils/leaderboard/getTotalLosses';
import getTotalPoints from '../utils/leaderboard/getTotalPoints';
import getTotalVictories from '../utils/leaderboard/getTotalVictories';
import sortTable from '../utils/leaderboard/sortTable';

// Tive suporte de Arthur Costa
export default class LeaderboardService implements ILeaderboardService {
  protected teamModel: ModelStatic<Team> = Team;
  protected matchModel: ModelStatic<Match> = Match;

  async getTable(): Promise<ILeaderboard[]> {
    const teams = await this.teamModel.findAll();
    // const matches = await this.matchModel.findAll();

    // finishedMatches();

    const table1 = teams.map((team: Team) => ({
      name: team.dataValues.teamName,
      totalGames: 0,
      totalPoints: 0,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 0,
      goalsOwn: 0,
      goalsBalance: 0,
      efficiency: 0,
    }));
    return table1;
  }

  async homePerfomance(): Promise<ILeaderboard[]> {
    const teams = await this.teamModel.findAll();
    const matches = await this.matchModel.findAll();

    const finishedMatches = matches.filter((match: Match) => match.dataValues.inProgress === false);

    const tableAtHome = teams.map((team: Team) => ({
      name: team.dataValues.teamName,
      totalPoints: getTotalPoints(Number(team.id), finishedMatches),
      totalGames: getTotalGames(Number(team.id), finishedMatches),
      totalVictories: getTotalVictories(Number(team.id), finishedMatches),
      totalDraws: getTotalDraw(Number(team.id), finishedMatches),
      totalLosses: getTotalLosses(Number(team.id), finishedMatches),
      goalsFavor: getGoalsFavor(Number(team.id), finishedMatches),
      goalsOwn: getGoalsOwn(Number(team.id), finishedMatches),
      goalsBalance: getGoalsBalance(Number(team.id), finishedMatches),
      efficiency: getEfficiency(Number(team.id), finishedMatches),
    }));

    return sortTable(tableAtHome);
  }
}
