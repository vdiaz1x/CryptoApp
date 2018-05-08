// this configures all the connections between models, controllers, and response handling (views)
// exporting the connection to the server using dependency injection
// config for coin models, controllers, responses, routes

module.exports = (db) => {
  // initializes express router
  const router     = require('express').Router();
  // gets the response handlers
  const response   = require('./coinResponse');
  // gets the models
  const model      = require('./coinModel')(db);
  // gets the controllers and gets passed the models
  const controller = require('./coinController')(model);
  // gets the routes
  const coinRouter = require('./coinRouter');

  // return the configured task router
  return coinRouter(router, controller, response);
};
