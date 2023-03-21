import IMatch from '../../interfaces/IMatch';

const getGoalsFavor = (teamId: number, matches: IMatch[]) => {
  const filterMatches = matches
    .filter((match) => match.homeTeamId === teamId);

  const goalsFavor = filterMatches.reduce((goals, match) => goals + match.homeTeamGoals, 0);

  return goalsFavor;
};

export default getGoalsFavor;
