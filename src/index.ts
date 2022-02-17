import express from 'express';
import connection from './model/connection';
import router from './routes';

class App {
  public express: express.Application

  constructor() {
    this.express = express();
    this.listen();
    this.middlewares();
    this.database();
    this.router();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private database(): void {
    connection('mongodb://localhost:27017/world_cups');
  }

  private router() {
    this.express.use(router);
  }

  private listen() {
    this.express.listen(3000, () => console.log('Ouvindo na porta 3000'));
  }
}

new App();