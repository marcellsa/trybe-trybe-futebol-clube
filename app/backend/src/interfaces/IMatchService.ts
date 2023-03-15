import IMatch from './IMatch';

export default interface IMatchService {
  getAll(): Promise<IMatch[]>;
  filterInProgress(query: boolean): Promise<IMatch[]>;
}
