import IMatch from '../../interfaces/IMatch';
import getTotalDraw from './getTotalDraw';
import getTotalVictories from './getTotalVictories';

const getTotalPoints = (teamId: number, matches: IMatch[]) => {
  const totalPoints = getTotalVictories(teamId, matches) * 3 + getTotalDraw(teamId, matches);
  return totalPoints;
};

export default getTotalPoints;
