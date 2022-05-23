import { sign } from 'jsonwebtoken';
import login from '../models/login.model';

export default async function loginService(username: string, password: string) {
  if (await login(username, password)) {
    return sign({ username }, 'superSecretPrivatekey', { expiresIn: '4h' });
  }
}
