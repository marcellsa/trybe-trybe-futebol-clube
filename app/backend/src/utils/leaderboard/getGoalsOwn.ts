import IMatch from '../../interfaces/IMatch';

const getGoalsOwn = (teamId: number, matches: IMatch[], performance: string | undefined) => {
  if (performance === 'home') {
    const matchesHome = matches
      .filter((match) => match.homeTeamId === teamId);
    const goalsFavor = matchesHome.reduce((goals, match) => goals + match.awayTeamGoals, 0);
    return goalsFavor;
  }

  if (performance === 'away') {
    const matchesAway = matches
      .filter((match) => match.awayTeamId === teamId);
    const goalsFavor = matchesAway.reduce((goals, match) => goals + match.homeTeamGoals, 0);
    return goalsFavor;
  }

  const goalsFavor = matches
    .reduce((goals, match) => goals + match.awayTeamGoals, 0);
  return goalsFavor;
};

export default getGoalsOwn;
