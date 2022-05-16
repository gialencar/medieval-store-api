import express from 'express';
import errorHandler from './middlewares/errorHandler';
import productsRouter from './routes/products.routes';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => res.send('ok'));

app.use('/products', productsRouter);

app.use(errorHandler);

export default app;
