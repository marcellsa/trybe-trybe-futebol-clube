import { RequestHandler } from 'express';
import * as jwt from 'jsonwebtoken';

const authMiddleware: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const token = jwt.verify(authorization, process.env.JWT as string);
    req.body.user = token;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default authMiddleware;
