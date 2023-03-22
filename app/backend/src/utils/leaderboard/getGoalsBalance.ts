import IMatch from '../../interfaces/IMatch';
import getGoalsFavor from './getGoalsFavor';
import getGoalsOwn from './getGoalsOwn';

const getGoalsBalance = (teamId: number, matches: IMatch[]) => {
  const filterMatches = matches
    .filter((match) => match.homeTeamId === teamId);

  const goalsFavor = getGoalsFavor(teamId, filterMatches);
  const goalsOwn = getGoalsOwn(teamId, filterMatches);

  const balance = goalsFavor - goalsOwn;

  return balance;
};

export default getGoalsBalance;
