// this configures all the connections between models, controllers, and response handling (views)
// exporting the connection to the server using dependency injection
// config for comment models, controllers, responses, routes

module.exports = (db) => {
  // initializes express router
  const router        = require('express').Router();
  // gets the response handlers
  const response      = require('./commentResponse');
  // gets the models
  const model         = require('./commentModel')(db);
  // gets the controllers and gets passed the models
  const controller    = require('./commentController')(model);
  // gets the routes
  const commentRouter = require('./commentRouter');

  // return the configured task router
  return commentRouter(router, controller, response);
};
