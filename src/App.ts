import express from 'express';
import cors from 'cors';

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
  }

  private routes(): void {
    this.express.get('/', (req, res) => res.send('hello yang '));
  }
}

export default new App().express;
