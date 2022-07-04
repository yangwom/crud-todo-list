import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ErrorStatus from './ErrorStatus';
class HandleError {
	errorMiddleware = (
		err: ErrorStatus,
		req: Request,
		res: Response,
		next: NextFunction,
	) => {
		if(err.status) return res.status(err.status).json({ message: err.message });
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
	};
}


export default HandleError;