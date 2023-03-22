import IMatch from '../../interfaces/IMatch';

const getTotalDraw = (teamId: number, matches: IMatch[], performance: string | undefined) => {
  if (performance === 'home') {
    const matchesAtHome = matches
      .filter((match) => match.homeTeamId === teamId
      && match.homeTeamGoals === match.awayTeamGoals);
    return matchesAtHome.length;
  }

  if (performance === 'away') {
    const matchesAway = matches
      .filter((match) => match.awayTeamId === teamId
      && match.homeTeamGoals === match.awayTeamGoals);
    return matchesAway.length;
  }

  return matches.length;
};

export default getTotalDraw;
