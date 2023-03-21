import { Request, Response, Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';
import LearderboardService from '../services/LeaderboardService';

const leaderboardRoutes = Router();
const leaderboardService = new LearderboardService();
const leaderboardController = new LeaderboardController(leaderboardService);

leaderboardRoutes
  .get(
    '/leaderboard/home',
    (req: Request, res: Response) => leaderboardController.homePerfomance(req, res),
  );

leaderboardRoutes
  .get('/leaderboard', (req: Request, res: Response) => leaderboardController.getTable(req, res));

export default leaderboardRoutes;
