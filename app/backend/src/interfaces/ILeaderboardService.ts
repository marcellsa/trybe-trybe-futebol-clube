import ILeaderboard from './ILeaderboard';

export default interface ILeaderboardService {
  // getTable(): Promise<ILeaderboard[]>
  homePerfomance(): Promise<ILeaderboard[]>
  awayPerfomance(): Promise<ILeaderboard[]>
}
