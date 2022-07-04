import express from 'express';
import cors from 'cors';
import HandleError from './Error/HandleError';
import router from './router';

class App {
	public express: express.Application;

	constructor() {
		this.express = express();
		this.middlewares();
	}

	private middlewares(): void {
		this.express.use(cors());
		this.express.use(express.json());
		this.express.use(router);
		this.express.use(new HandleError().errorMiddleware);
	}

}

export default new App().express;
