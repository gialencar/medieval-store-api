import { IOrder } from '../interfaces/orders';
import connection from './connection';

export default async function getAllOrders() {
  const [orders] = await connection.query('SELECT * FROM Trybesmith.Orders');

  return Object.values(JSON.parse(JSON.stringify(orders))) as IOrder[];
}
