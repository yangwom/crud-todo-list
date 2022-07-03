import UserService from '../service/UserService';
import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

class UserController {
	async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const data = await new UserService().getAll();
			
			return res.status(StatusCodes.OK).json(data);

		} catch(error) {
			next(error);
		}

	}
}

export default UserController;