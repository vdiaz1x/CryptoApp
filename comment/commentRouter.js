// this is the file for the comment route
/**
*@module comment/commentRouter
*@param {module} commentRouter
*@param {module} commentController
*@param {module} responseHandler
*@return
*/

module.exports = (commentRouter, commentController, responseHandler) => {

  commentRouter.route('/:id')
    .get(commentController.getOneComment, responseHandler.sendJson)
    .put(commentController.updateComment, responseHaldler.sendJson)
    .delete(commentController.deleteComment, responeHandler.deleteHandle);

  commentRouter.route('/')
    .get(commentController.getAllComments, responseHandler.sendJson)
    .post(commentController.makeComment, responseHandler.createHand);
    // need to figure out what the last route is supposed to do
    // also check if the route for this is correct

};
