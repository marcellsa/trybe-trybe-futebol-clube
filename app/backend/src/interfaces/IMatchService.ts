import IMatch from './IMatch';

export default interface IMatchService {
  getAll(): Promise<IMatch[]>;
  filterInProgress(query: boolean): Promise<IMatch[]>;
  finishMatch(id: number): Promise<void>;
  updateMatch(id: number): Promise<void>;
}
