// this is the file for the comment route
/**
*@module user/userRouter
*@param {module} userRouter
*@param {module} userController
*@param {module} responseHandler
*@return
*/

module.exports = (userRouter, userController, responseHandler) => {

  userRouter.route('/:id')
    .get(userController.getOneUser, responseHandler.sendJson)
    .post(userController.updateUser, responseHandler.sendJson)

  userRouter.route('/')
    .get(userController.addUser, responseHandler.addJson);
}
