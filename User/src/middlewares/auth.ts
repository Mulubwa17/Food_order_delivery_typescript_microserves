
import { Request, Response, NextFunction } from 'express';
import * as jwt from "jsonwebtoken";




const JWT_SECRET  = 'food1234';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.body.token || req.query.token || req.headers.token;

    if (!token) {
      return res.send({ status: 403, message: 'A token is required for authentication' });
    }
    try {
      
      const decoded = jwt.verify(token, JWT_SECRET);
        req.query.user = decoded;
    } catch (err) {
      return res.send({ status: 401, message: 'Invalid Token' });
    }
    return next();
  } catch (error) {
    res.send({
      status: 401,
      error,
      message: 'User session expired,Log in to continue',
    });
  }
};