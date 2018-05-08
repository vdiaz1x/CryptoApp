// this is the file for the comment route
/**
*@module user/userRouter
*@param {module} authRouter
*@param {module} authController
*@param {module} responseHandler
*@return
*/

module.exports = (authRouter, authController, authResponse) => {

  authRouter.route('/login')
    .get(authResponse.sendJson)
    .post(authController.login, authResponse.handCreate);

  authRouter.route('/logout')
    .get(authController.logout, authResponse.handLogout);
}
