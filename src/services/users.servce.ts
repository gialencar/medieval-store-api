import * as jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/users.interfaces';
import createUser from '../models/users.model';

export default async function create(user: IUser) {
  await createUser(user);
  const { JWT_SECRET } = process.env;

  const token = jwt.sign(user, JWT_SECRET || 'superSecretKey');

  return token;
}
