import { Request, Response } from 'express';
import ILeaderboardService from '../interfaces/ILeaderboardService';

export default class Leadrboard {
  private _service: ILeaderboardService;

  constructor(service: ILeaderboardService) {
    this._service = service;
  }

  async homePerfomance(req: Request, res: Response) {
    const result = await this._service.homePerfomance();
    return res.status(200).json(result);
  }

  async getTable(req: Request, res: Response) {
    const result = await this._service.getTable();
    return res.status(200).json(result);
  }
}
