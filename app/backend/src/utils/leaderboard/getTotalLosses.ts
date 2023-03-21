import IMatch from '../../interfaces/IMatch';

const getTotalLosses = (teamId: number, matches: IMatch[]) => {
  const filterMatches = matches
    .filter((match) => match.homeTeamId === teamId && match.homeTeamGoals < match.awayTeamGoals);
  return filterMatches.length;
};

export default getTotalLosses;
