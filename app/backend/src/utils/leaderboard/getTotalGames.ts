import IMatch from '../../interfaces/IMatch';

const getTotalGames = (teamId: number, matches: IMatch[]) => {
  const filterMatches = matches.filter((match) => match.homeTeamId === teamId);
  return filterMatches.length;
};

export default getTotalGames;
