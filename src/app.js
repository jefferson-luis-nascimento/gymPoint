const express = require('express');

const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    
    middlewares();
  
    routes() ;
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = App().server;