import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

function validateProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, amount } = req.body;
    const { error } = productSchema.validate({ name, amount });
    if (error) throw error;
    next();
  } catch (error) {
    next(error);
  }
}

export default validateProduct;
