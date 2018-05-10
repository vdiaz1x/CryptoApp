// this configures all the connections between models, controllers, and response handling (views)
// exporting the connection to the server using dependency injection
// config for user models, controllers, responses, routes

module.exports = (db) => {
  // initializes express router
  const router     = require('express').Router();
  // gets the response handlers
  const response   = require('./user-authResponse');
  // gets the models
  const model      = require('./user-authModel')(db);
  // gets the controllers and gets passed the models
  const controller = require('./user-authController')(model);
  // gets the routes
  const userRouter = require('./user-authRouter');

  // return the configured task router
  return userRouter(router, controller, response);
};
