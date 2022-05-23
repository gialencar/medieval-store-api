import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/orders';
import connection from './connection';

async function getAllOrders() {
  const [orders] = await connection.query('SELECT * FROM Trybesmith.Orders');

  return Object.values(JSON.parse(JSON.stringify(orders))) as IOrder[];
}

async function createOrder(productsIds: number[], username: string) {
  const [[user]] = await connection.query<RowDataPacket[][]>(
    'SELECT id FROM Trybesmith.Users usr WHERE usr.username = ?',
    [username],
  );
  const [userId] = Object.values(JSON.parse(JSON.stringify(user)));

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
    [userId],
  );

  await connection.execute('UPDATE Trybesmith.Products SET orderId=? WHERE id=?', [
    insertId,
    insertId + 1,
  ]);

  return { userId, productsIds };
}

export { getAllOrders, createOrder };
