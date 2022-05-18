import { IProduct } from '../interfaces/products.interfaces';
import * as productModel from '../models/products.model';

async function getAll() {
  const products = await productModel.getAll();
  return products;
}

async function create(product: IProduct) {
  const insertId = await productModel.create(product);

  return insertId;
}

export { getAll, create };
