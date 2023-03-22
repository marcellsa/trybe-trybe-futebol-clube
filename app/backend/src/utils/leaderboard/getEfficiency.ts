import IMatch from '../../interfaces/IMatch';
import getTotalGames from './getTotalGames';
import getTotalPoints from './getTotalPoints';

const getEfficiency = (teamId: number, matches: IMatch[]) => {
  const filterMatches = matches
    .filter((match) => match.homeTeamId === teamId);

  const totalPoints = getTotalPoints(teamId, filterMatches);
  const totalGames = getTotalGames(teamId, filterMatches);

  const efficiency = (totalPoints / (totalGames * 3)) * 100;

  return Number(efficiency.toFixed(2));
};

export default getEfficiency;
