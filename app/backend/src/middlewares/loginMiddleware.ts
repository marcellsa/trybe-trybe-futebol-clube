import { NextFunction, Request, Response } from 'express';
import checkLoginFields from '../utils/checkLoginFields';
import HttpException from '../utils/HttpException';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const result = checkLoginFields(email, password);

  if (result) {
    throw new HttpException(400, 'All fields must be filled');
  }
  next();
};

export default validateLogin;
