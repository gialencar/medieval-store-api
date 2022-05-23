import { Router } from 'express';
import { createOrder, getAllOrders } from '../controllers/orders.controller';
import validateOrder from '../middlewares/orderValidation';
import validateAuthorization from '../middlewares/validateAuthorization';

const ordersRouter = Router();

ordersRouter.get('/', getAllOrders).post('/', validateAuthorization, validateOrder, createOrder);

export default ordersRouter;
