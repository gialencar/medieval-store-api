import { Request, Response } from 'express';
import index from '../services/orders.service';

export default async function getAllOrders(_req: Request, res: Response) {
  const result = await index();

  res.status(200).json(result);
}
