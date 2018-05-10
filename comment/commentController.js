module.exports = commentModel => ({

  async getAllComments(req, res, next) {
    try {
      console.log(req.user.userID);
      console.log(req.user.coinID);

      res.locals.comments = await commentModel.getAllComments(req.user.userID, req.user.coinID);
      next();
    } catch (e) {
      next(e);
    }
  },

  async getOneComment(req, res, next) {
    try {
      console.log(req.user.commentID);
      console.log(req.params.id);

      res.locals.comments = await commentModel.getOneComment(req.user.commentID);
      next();
    } catch (e) {
      next(e);
    }
  },

  async makeComment(req, res, next) {
    try {
      console.log(req.body);

      res.locals.comments = await commentModel.create(req.body);
      next();
    } catch (e) {
      next(e);
    }
  },

  async updateComment(req, res, next) {

    try {
      res.locals.comments = await commentModel.update(commentID, req.body);
      next();
    } catch (e) {
      next(e);
    }
  },

  async deleteComment(req, res, next) {

    try {
      res.locals.comments = await commentModel.destroy(req.session.comments.commentID, req.params.id);
      next();
    } catch (e) {
      next(e);
    }
  },


});
