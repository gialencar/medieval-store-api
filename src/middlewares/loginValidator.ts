import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

function validateLogin(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, password } = req.body;
    const { error } = userSchema.validate({ username, password });
    if (error) throw error;
    next();
  } catch (error) {
    next(error);
  }
}

export default validateLogin;
