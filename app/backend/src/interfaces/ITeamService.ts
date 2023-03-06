import Team from '../database/models/TeamModel';

export default interface ITeamService {
  readAll(): Promise<Team[]>
  readById(id: number): Promise<Team>
}
