// this is the file for the comment route

// exportng the router as a function
module.exports = (commentRouter, commentController, responseHandler) => {
  // base route looks like => /api/coins/comments
  // this is the route for each comment
  commentRouter.route('/:commentID')
    // gets one comment
    .get(commentController.getOneComment, responseHandler.sendJson)
    // updates one comment
    .put(commentController.updateComment, responseHandler.sendJson)
    // deletes one comment
    .delete(commentController.deleteComment, responseHandler.deleteHandler);

  // base route looks like => /api/coins/comments
  // this is the base route for all commments by user and coin
  commentRouter.route('/')
  // gets all comments
    .get(commentController.getAllComments, responseHandler.sendJson)
    // posts one comment
    .post(commentController.makeComment, responseHandler.createHandler);

  // returning the router so the server has access to it in the require module
  return commentRouter;
};
