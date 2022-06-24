import express from "express";
import cors from "cors";

class app {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(cors());
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.get("/", (req, res) => {
      return res.send("hellow yang ");
    });
  }
}

export default new app().express;
