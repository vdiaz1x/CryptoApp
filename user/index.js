// this configures all the connections between models, controllers, and response handling (views)
// exporting the connection to the server using dependency injection
// config for user models, controllers, responses, routes

module.exports = (db) => {
  // initializes express router
  const router     = require('express').Router();
  // gets the response handlers
  const response   = require('./userResponse');
  // gets the models
  const model      = require('./userModel')(db);
  // gets the controllers and gets passed the models
  const controller = require('./userController')(model);
  // gets the routes
  const userRouter = require('./userRouter');

  // return the configured task router
  return userRouter(router, controller, response);
};
