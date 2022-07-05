import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

interface authorizedUser extends Request {
	user?: string | JwtPayload;

}

export default authorizedUser;