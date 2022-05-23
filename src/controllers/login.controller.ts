import { Request, Response } from 'express';
import loginService from '../services/login.service';

export default async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  const token = await loginService(username, password);
  if (token) {
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Username or password invalid' });
  }
}
