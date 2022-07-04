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

	async create(req: Request, res: Response, next: NextFunction) {
		try {
			const generetedToken = await new UserService().create(req.body);

			return res.status(StatusCodes.CREATED).json({ token: generetedToken });

		} catch(error) {
			next(error);
		}
	}
}

export default UserController;