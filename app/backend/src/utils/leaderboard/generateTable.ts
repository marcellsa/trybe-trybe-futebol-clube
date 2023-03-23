import Team from '../../database/models/TeamModel';
import IMatch from '../../interfaces/IMatch';
import getEfficiency from './getEfficiency';
import getGoalsBalance from './getGoalsBalance';
import getGoalsFavor from './getGoalsFavor';
import getGoalsOwn from './getGoalsOwn';
import getTotalDraw from './getTotalDraw';
import getTotalGames from './getTotalGames';
import getTotalLosses from './getTotalLosses';
import getTotalPoints from './getTotalPoints';
import getTotalVictories from './getTotalVictories';

const generateTable = (teams: Team[], matches: IMatch[], performance: string | undefined) => {
  const table = teams.map((team: Team) => ({
    name: team.teamName,
    totalPoints: getTotalPoints(Number(team.id), matches, performance),
    totalGames: getTotalGames(Number(team.id), matches, performance),
    totalVictories: getTotalVictories(Number(team.id), matches, performance),
    totalDraws: getTotalDraw(Number(team.id), matches, performance),
    totalLosses: getTotalLosses(Number(team.id), matches, performance),
    goalsFavor: getGoalsFavor(Number(team.id), matches, performance),
    goalsOwn: getGoalsOwn(Number(team.id), matches, performance),
    goalsBalance: getGoalsBalance(Number(team.id), matches, performance),
    efficiency: getEfficiency(Number(team.id), matches, performance),
  }));
  return table;
};

export default generateTable;
