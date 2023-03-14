import { Request, Response, Router } from 'express';
import MatchController from '../controllers/MatchController';
import MatchService from '../services/MatchService';

const matchRoutes = Router();
const matchService = new MatchService();
const matchController = new MatchController(matchService);

matchRoutes.get('/matches', (req: Request, res: Response) => matchController.getAll(req, res));

export default matchRoutes;
