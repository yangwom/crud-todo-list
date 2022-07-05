import { NextFunction, Response} from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../jwtConfig/jwtConfig';
import ErrorStatus from '../Error/ErrorStatus';
import authorizedUser from '../interface/reqUser';


const authMiddleware = (req: authorizedUser , res: Response, next: NextFunction) => {
	const { authorization: token } = req.headers;

	if(!token) next(new ErrorStatus(401,'unauthorized'));

	try {
		const user = jwt.verify(token as string, JWT_SECRET);

		req.user = user;
		console.log(user);
		next();
	}catch(error) {
		next(new ErrorStatus(401,'inspired token'));
	}

};

export default authMiddleware;