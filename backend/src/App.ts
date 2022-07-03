import express from 'express';
import cors from 'cors';
import errorMiddleware from './Error/errorMiddleware';

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
		this.express.get('/', (req, res) => res.send('hello yang '));
	}
}

export default new App().express;
