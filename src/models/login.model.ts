import { RowDataPacket } from 'mysql2';
import connection from './connection';

export default async function login(username: string, password: string) {
  const [result] = await connection.query<RowDataPacket[][]>(
    'SELECT * FROM Trybesmith.Users usr WHERE usr.username = ? AND usr.password = ?',
    [username, password],
  );
  return !!result.length;
}
