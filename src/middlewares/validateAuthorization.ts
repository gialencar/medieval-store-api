import { NextFunction, Request, Response } from 'express';
import { decode, verify, JwtPayload } from 'jsonwebtoken';

export default function validateAuthorization(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const token = authorization.split(' ')[1] || authorization;
    verify(token, 'superSecretPrivatekey');
    const { username } = decode(token) as JwtPayload;
    req.body.username = username;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
