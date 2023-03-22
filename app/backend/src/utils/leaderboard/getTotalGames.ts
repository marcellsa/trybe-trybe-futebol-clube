import IMatch from '../../interfaces/IMatch';

const getTotalGames = (teamId: number, matches: IMatch[], performance: string | undefined) => {
  if (performance === 'home') {
    const matchesAtHome = matches.filter((match) => match.homeTeamId === teamId);
    return matchesAtHome.length;
  }

  if (performance === 'away') {
    const matchesAway = matches.filter((match) => match.awayTeamId === teamId);
    return matchesAway.length;
  }

  return matches.length;
};

export default getTotalGames;
