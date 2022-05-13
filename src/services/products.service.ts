import connection from '../models/connection';

async function getAll() {
  const [products] = await connection.query('SELECT * FROM Trybesmith.Products');
  return products;
}

export default { getAll };
