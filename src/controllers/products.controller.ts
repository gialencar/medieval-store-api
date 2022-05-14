import { Request, Response } from 'express';
import * as productsService from '../services/products.service';

async function getAll(_req: Request, res: Response) {
  const products = await productsService.getAll();
  res.status(200).json(products);
}

async function create(req: Request, res: Response) {
  const { name, amount } = req.body;
  await productsService.create({ name, amount });
  res.status(201);
}

export default {
  getAll,
  create,
};
