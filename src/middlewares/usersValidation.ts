import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

function validateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, classe, level, password } = req.body;
    const { error } = userSchema.validate({ username, classe, level, password });
    if (error) throw error;
    next();
  } catch (error) {
    next(error);
  }
}

export default validateUser;
