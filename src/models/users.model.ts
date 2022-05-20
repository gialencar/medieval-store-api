import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/users.interfaces';
import connection from './connection';

async function create(user: IUser) {
  const { username, classe, level, password } = user;

  const [{ insertId }] = await connection.query<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );

  return insertId;
}

export default create;
