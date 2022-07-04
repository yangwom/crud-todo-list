import { SignOptions } from 'jsonwebtoken';

const jwtConfig: SignOptions = { expiresIn: '7d', algorithm: 'HS256' };

export const JWT_SECRET = 'todolist';

export default jwtConfig;