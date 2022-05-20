import { Request, Response } from 'express';
import createUser from '../services/users.servce';

export default async function create(req: Request, res: Response) {
  const { username, classe, level, password } = req.body;
  const token = await createUser({ username, classe, level, password });
  res.status(201).json({ token });
}
