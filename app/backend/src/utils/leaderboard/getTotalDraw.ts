import IMatch from '../../interfaces/IMatch';

const getTotalDraw = (teamId: number, matches: IMatch[]) => {
  const filterMatches = matches
    .filter((match) => match.homeTeamId === teamId && match.homeTeamGoals === match.awayTeamGoals);
  return filterMatches.length;
};

export default getTotalDraw;
