import { createOrder, getAllOrders } from '../models/orders.model';
import { getProductsByOrderId } from '../models/products.model';

async function index() {
  const orders = await getAllOrders();

  const productsIds = await Promise.all(orders.map(async ({ id }) => getProductsByOrderId(id)));

  const result = orders.map(({ id, userId }) => ({
    id,
    userId,
    productsIds: productsIds
      .map(([prod]) => prod.orderId === id && prod.id)
      .filter((el) => typeof el === 'number'),
  }));

  return result;
}

async function create(productsIds: number[], username: string) {
  const result = await createOrder(productsIds, username);

  return result;
}

export { index, create };
