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

  async finishMatch(req: Request, res: Response) {
    const { id } = req.params;
    await this._service.finishMatch(+id);
    return res.status(200).json({ message: 'Finished' });
  }

  async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this._service.updateMatch(+id, +homeTeamGoals, +awayTeamGoals);
    return res.status(200).json({ message: 'Updated' });
  }

  async createMatch(req: Request, res: Response) {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
    const result = await this._service.createMatch(
      +homeTeamId,
      +awayTeamId,
      +homeTeamGoals,
      +awayTeamGoals,
    );
    return res.status(201).json(result);
  }
}
