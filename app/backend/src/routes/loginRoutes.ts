import { Request, Response, Router } from 'express';
import UserController from '../controllers/UserController';
import authMiddleware from '../middlewares/authMiddleware';
import validateLogin from '../middlewares/loginMiddleware';
import UserService from '../services/UserService';

const loginRoutes = Router();
const userService = new UserService();
const userController = new UserController(userService);

loginRoutes
  .post('/login', validateLogin, (req: Request, res: Response) => userController.login(req, res));

loginRoutes
  .get(
    '/login/role',
    authMiddleware,
    (req: Request, res: Response) => userController.getRole(req, res),
  );

export default loginRoutes;
