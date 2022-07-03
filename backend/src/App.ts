import express from 'express';
import cors from 'cors';
import errorMiddleware from './Error/errorMiddleware';
import usersModel from './model/usersModel';

class App {
	public express: express.Application;

	constructor() {
		this.express = express();
		this.routes();
		this.middlewares();
	}

	private middlewares(): void {
		this.express.use(cors());
		this.express.use(express.json());
		this.express.use(errorMiddleware);
	}

	private routes(): void {
		this.express.get('/', async (req, res) => {
			const data = await usersModel.findAll();
			return res.status(200).json(data);
		});
	}
}

export default new App().express;
