import { Request, Response } from 'express';
import IUserService from '../interfaces/IUserService';

export default class UserController {
  private _service: IUserService;

  constructor(service: IUserService) {
    this._service = service;
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = await this._service.login(email, password);
    return res.status(200).json({ token: result });
  }

  async getRole(req: Request, res: Response) {
    const { email } = req.body;
    const result = await this._service.getRole(email);
    return res.status(200).json({ role: result });
  }
}
