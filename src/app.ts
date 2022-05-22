import express from 'express';
import errorHandler from './middlewares/errorHandler';
import ordersRouter from './routes/orders.routes';
import productsRouter from './routes/products.routes';
import usersRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => res.send('ok'));

app.use('/products', productsRouter);

app.use('/users', usersRouter);

app.use('/orders', ordersRouter);

app.use(errorHandler);

export default app;
