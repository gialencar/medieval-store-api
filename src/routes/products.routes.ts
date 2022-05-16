import { Router } from 'express';
import * as productsController from '../controllers/products.controller';
import validateProduct from '../middlewares/productsValidation';

const productsRouter = Router();

productsRouter
  .get('/', productsController.getAll)
  .post('/', validateProduct, productsController.create);

export default productsRouter;
