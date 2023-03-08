import { Request, Response, Router } from 'express';
import UserController from '../controllers/UserController';
import validateLogin from '../middlewares/loginMiddleware';
import UserService from '../services/UserService';

const loginRoutes = Router();
const userService = new UserService();
const userController = new UserController(userService);

loginRoutes
  .post('/login', validateLogin, (req: Request, res: Response) => userController.login(req, res));

export default loginRoutes;
