import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function getAll(_req: Request, res: Response) {
  const products = await productsService.getAll();
  res.status(200).json(products);
}

export default { getAll };
