import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../interfaces/products.interfaces';
import connection from './connection';

async function getAll() {
  const [products] = await connection.query('SELECT * FROM Trybesmith.Products');
  return Object.values(JSON.parse(JSON.stringify(products))) as IProduct[];
}

async function getProductsByOrderId(orderId: number) {
  const [products] = await connection.query('SELECT * FROM Trybesmith.Products WHERE orderId = ?', [
    orderId,
  ]);

  return Object.values(JSON.parse(JSON.stringify(products))) as IProduct[];
}

async function create(product: IProduct) {
  const [{ insertId }] = await connection.query<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );

  return insertId;
}

export { getAll, create, getProductsByOrderId };
