import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../interfaces/products.interfaces';
import connection from '../models/connection';

async function getAll() {
  const [products] = await connection.query('SELECT * FROM Trybesmith.Products');
  return products;
}

async function create(product: IProduct) {
  const [insertId] = await connection.query<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products VALUES ? ?',
    [product.name, product.amount],
  );

  return insertId;
}

export {
  getAll,
  create,
};
