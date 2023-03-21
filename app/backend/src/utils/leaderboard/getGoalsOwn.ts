import IMatch from '../../interfaces/IMatch';

const getGoalsOwn = (teamId: number, matches: IMatch[]) => {
  const filterMatches = matches
    .filter((match) => match.homeTeamId === teamId);

  const goalsFavor = filterMatches.reduce((goals, match) => goals + match.awayTeamGoals, 0);

  return goalsFavor;
};

export default getGoalsOwn;
