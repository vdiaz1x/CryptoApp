// this is the file for the comment route
/**
*@module user/userRouter
*@param {module} authRouter
*@param {module} authController
*@param {module} responseHandler
*@return
*/

module.exports = (authRouter, authController, authResponse) => {
  // authRouter.route('/login')
  //   .get(authResponse.showLogin)
  //   .post(authController.login, authResponse.handleLogin);

  // authRouter.route('/logout')
  //   .get(authController.logout, authResponse.handleLogout);

  authRouter.route('/')
    // .get(authResponse.showRegister)
    .post(authController.register, authResponse.handleCreateUser);

  return authRouter;
};
