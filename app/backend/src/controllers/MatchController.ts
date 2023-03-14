import { Request, Response } from 'express';
import IMatchService from '../interfaces/IMatchService';

export default class MatchController {
  private _service: IMatchService;

  constructor(service: IMatchService) {
    this._service = service;
  }

  async getAll(req: Request, res: Response) {
    const result = await this._service.getAll();
    return res.status(200).json(result);
  }
}
