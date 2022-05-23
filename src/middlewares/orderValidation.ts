import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const productSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).required(),
});

function validateOrder(req: Request, res: Response, next: NextFunction) {
  try {
    const { productsIds } = req.body;
    const { error } = productSchema.validate({ productsIds });
    if (error) throw error;
    if (!productsIds.length) {
      return res.status(422).json({ message: '"productsIds" must include only numbers' });
    }
    next();
  } catch (error) {
    next(error);
  }
}

export default validateOrder;
