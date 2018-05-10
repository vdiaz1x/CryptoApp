// this is the file for the controllers for the comment routes
// code borrowed from class work

// exporting the models in a function
module.exports = commentModel => ({

  // controller for getting all comments for that user and coun
  async getAllComments(req, res, next) {
    try {
      console.log('get all', req.user.userID);
      console.log('get all', req.user.coinID);

      // params for model are user id and coin id
      res.locals.comments = await commentModel.getAllComments(req.user.userID, req.user.coinID);

      console.log(res.locals.comments);
      next();
    } catch (e) {
      next(e);
    }
  },

  // controller for getting one comment
  async getOneComment(req, res, next) {
    try {
      console.log('get one', req.params.commentID);

      // param for model is the comment id, found in the route param
      res.locals.comment = await commentModel.getOneComment(req.params.commentID);

      console.log(res.locals.comment);
      next();
    } catch (e) {
      next(e);
    }
  },

  // controller for making one comment
  async makeComment(req, res, next) {
    try {
      console.log(req.body);

      // param for model is the infor obtained in the form and passe in the fetch
      res.locals.comments = await commentModel.create(req.body);
      next();
    } catch (e) {
      next(e);
    }
  },

  // controller for updating one comment
  async updateComment(req, res, next) {
    console.log(req.params.commentID);
    console.log(req.body.content);

    try {
      // param for model is the comment id, found in the route param
      res.locals.comments = await commentModel.update(req.params.commentID, req.body.content);
      next();
    } catch (e) {
      next(e);
    }
  },

  // controller for deleting one comment
  async deleteComment(req, res, next) {
    console.log(req.params.commentID);

    try {
      // param for model is the comment id, found in the route param
      res.locals.comments = await commentModel.destroy(req.params.commentID);
      next();
    } catch (e) {
      next(e);
    }
  },

});
