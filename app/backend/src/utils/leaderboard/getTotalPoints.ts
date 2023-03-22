import IMatch from '../../interfaces/IMatch';
import getTotalDraw from './getTotalDraw';
import getTotalVictories from './getTotalVictories';

const getTotalPoints = (teamId: number, matches: IMatch[], performance: string | undefined) => {
  const totalPoints = getTotalVictories(teamId, matches, performance) * 3
    + getTotalDraw(teamId, matches, performance);
  return totalPoints;
};

export default getTotalPoints;
