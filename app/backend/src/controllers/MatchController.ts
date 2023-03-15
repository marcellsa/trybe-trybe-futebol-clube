import { Request, Response } from 'express';
import IMatch from '../interfaces/IMatch';
import IMatchService from '../interfaces/IMatchService';

export default class MatchController {
  private _service: IMatchService;

  constructor(service: IMatchService) {
    this._service = service;
  }

  async getAll(req: Request, res: Response) {
    let result: IMatch[] = [];
    if (req.query.inProgress) {
      result = await this._service.filterInProgress(req.query.inProgress === 'true');
    } else {
      result = await this._service.getAll();
    }
    return res.status(200).json(result);
  }
}
