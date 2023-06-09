import IMatch from './IMatch';

export default interface IMatchService {
  getAll(): Promise<IMatch[]>;
  filterInProgress(query: boolean): Promise<IMatch[]>;
  finishMatch(id: number): Promise<void>;
  updateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void>;
  createMatch(
    homeTeamId: number, awayTeamId: number, homeTeamGoals: number, awayTeamGoals: number
  ): Promise<IMatch>;
}
