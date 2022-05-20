import { Router } from 'express';
import create from '../controllers/users.controller';
import validateUser from '../middlewares/usersValidation';

const usersRouter = Router();

usersRouter.post('/', validateUser, create);

export default usersRouter;
