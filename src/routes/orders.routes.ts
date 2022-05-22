import { Router } from 'express';
import getAllOrders from '../controllers/orders.controller';

const ordersRouter = Router();

ordersRouter.get('/', getAllOrders);

export default ordersRouter;
