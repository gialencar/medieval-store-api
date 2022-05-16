import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

require('express-async-errors');

export default (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (Joi.isError(err)) {
    if (err.details[0].type === 'any.required') {
      return res.status(400).json({ message: err.message });
    }
    return res.status(422).json({ message: err.message });
  }
  console.log(3);
  res.status(500).json({ message: 'internal server error :(' });
};
