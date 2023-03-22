import IMatch from '../../interfaces/IMatch';
import getGoalsFavor from './getGoalsFavor';
import getGoalsOwn from './getGoalsOwn';

const getGoalsBalance = (teamId: number, matches: IMatch[], performance: string | undefined) => {
  if (performance === 'home') {
    const matchesHome = matches
      .filter((match) => match.homeTeamId === teamId);
    const balance = getGoalsFavor(teamId, matchesHome, 'home')
    - getGoalsOwn(teamId, matchesHome, 'home');
    return balance;
  }

  if (performance === 'away') {
    const matchesAway = matches
      .filter((match) => match.awayTeamId === teamId);
    const balance = getGoalsFavor(teamId, matchesAway, 'away')
    - getGoalsOwn(teamId, matchesAway, 'away');
    return balance;
  }

  const balance = getGoalsFavor(teamId, matches, 'general')
  - getGoalsOwn(teamId, matches, 'general');
  return balance;
};

export default getGoalsBalance;
