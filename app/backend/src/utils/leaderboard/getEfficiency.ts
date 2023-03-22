import IMatch from '../../interfaces/IMatch';
import getTotalGames from './getTotalGames';
import getTotalPoints from './getTotalPoints';

const getEfficiency = (teamId: number, matches: IMatch[], performance: string | undefined) => {
  if (performance === 'home') {
    const matchesHome = matches
      .filter((match) => match.homeTeamId === teamId);
    // const totalPoints = getTotalPoints(teamId, matchesHome, 'home');
    // const totalGames = getTotalGames(teamId, matchesHome, 'home');
    const efficiency = (getTotalPoints(teamId, matchesHome, 'home')
    / (getTotalGames(teamId, matchesHome, 'home') * 3)) * 100;
    return Number(efficiency.toFixed(2));
  }
  if (performance === 'away') {
    const matchesAway = matches
      .filter((match) => match.awayTeamId === teamId);
    // const totalPoints = getTotalPoints(teamId, matchesAway, 'away');
    // const totalGames = getTotalGames(teamId, matchesAway, 'away');
    const efficiency = (getTotalPoints(teamId, matchesAway, 'away')
    / (getTotalGames(teamId, matchesAway, 'away') * 3)) * 100;
    return Number(efficiency.toFixed(2));
  }
  // const totalPoints = getTotalPoints(teamId, matches, 'general');
  // const totalGames = getTotalPoints(teamId, matches, 'general');
  const efficiency = (getTotalPoints(teamId, matches, 'general')
  / (getTotalPoints(teamId, matches, 'general') * 3)) * 100;
  return Number(efficiency.toFixed(2));
};

export default getEfficiency;
