import { Request, Response } from 'express';
import { create, index } from '../services/orders.service';

async function getAllOrders(_req: Request, res: Response) {
  const result = await index();

  res.status(200).json(result);
}

async function createOrder(req: Request, res: Response) {
  const { productsIds, username } = req.body;
  const result = await create(productsIds, username);

  res.status(201).json(result);
}

export { getAllOrders, createOrder };
