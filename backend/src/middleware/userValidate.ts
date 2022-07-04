import { Request, Response, NextFunction } from 'express';
import ErrorStatus from '../Error/ErrorStatus';
import schemaUser from '../Joi/schema';

const userValidate = (req: Request, res: Response, next: NextFunction) => {
	const { error } = schemaUser.validate(req.body);

	if(error) next(new ErrorStatus(400, error.message));
	next();
};

export default userValidate;