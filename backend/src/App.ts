import express from 'express';
import cors from 'cors';
import errorMiddleware from './Error/errorMiddleware';
import router from './router';

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
		this.express.use(router);
	}
}

export default new App().express;
