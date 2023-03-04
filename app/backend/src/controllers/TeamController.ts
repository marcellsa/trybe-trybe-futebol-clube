import { Request, Response } from 'express';
import ITeamService from '../interfaces/ITeamService';

export default class TeamController {
  private _teamService: ITeamService;

  constructor(teamService: ITeamService) {
    this._teamService = teamService;
  }

  async readAll(req: Request, res: Response) {
    const result = await this._teamService.readAll();
    return res.status(200).json(result);
  }
}
