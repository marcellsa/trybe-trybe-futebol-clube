import { Request, Response, Router } from 'express';
import MatchController from '../controllers/MatchController';
import authMiddleware from '../middlewares/authMiddleware';
import MatchService from '../services/MatchService';

const matchRoutes = Router();
const matchService = new MatchService();
const matchController = new MatchController(matchService);

matchRoutes.get('/matches', (req: Request, res: Response) => matchController.getAll(req, res));

matchRoutes.patch(
  '/matches/:id/finish',
  authMiddleware,
  (req: Request, res: Response) => matchController.finishMatch(req, res),
);

matchRoutes.patch(
  '/matches/:id',
  authMiddleware,
  (req: Request, res: Response) => matchController.updateMatch(req, res),
);

export default matchRoutes;
