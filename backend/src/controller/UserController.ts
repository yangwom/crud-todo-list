import UserService from '../service/UserService';
import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import authorizedUser from '../interface/reqUser';
class UserController {
	async getAll(req: Request, res: Response, next: NextFunction) {
		try {
			const data = await new UserService().getAll();

			return res.status(StatusCodes.OK).json(data);
		} catch (error) {
			next(error);
		}
	}

	async create(req: Request, res: Response, next: NextFunction) {
		try {
			const generetedToken = await new UserService().create(req.body);

			return res.status(StatusCodes.CREATED).json({ token: generetedToken });
		} catch (error) {
			next(error);
		}
	}

	async getById(req: authorizedUser, res: Response, next: NextFunction) {
		const { id } = req.params;
		const { user } = req;
		console.log(user);
		try {
			const data = await new UserService().getById(id);

			return res.status(StatusCodes.OK).json(data);
		} catch (error) {
			next(error);
		}
	}

	async delete(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;
		try {
			await new UserService().delete(id);

			return res.status(StatusCodes.NO_CONTENT).json();
		} catch (error) {
			next(error);
		}
	}


}

export default UserController;
