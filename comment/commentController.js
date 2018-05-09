module.exports = commentModel => ({
  async getAllComments(req, res, next) {
    try {
      res.locals.comments = await commentModel.getAllComments(req.session.comments.commentID);
      next();
    } catch (e) {
      next(e);
    }
  },

  async getOneComment(req, res, next) {
    try {
      res.locals.comments = await commentModel.getOneComment(req.session.comments.commentID, req.params.id);
      next();
    } catch (e) {
      next(e);
    }
  },

  async makeComment(req, res, next) {
    try {
      res.locals.comments = await commentModel.create(req.session.comments.commentID, req.body);
      next();
    } catch (e) {
      next(e);
    }
  },

  async updateComment(req, res, next) {

    try {
      res.locals.comments = await commentModel.update(req.session.comments.commentID, req.body);
      next();
    } catch (e) {
      next(e);
    }
  },

  async deleteComment(req, res, next) {

    try {
      res.locals.tasks = await taskDB.destroy(req.session.comments.commentID, req.params.id);
      next();
    } catch (e) {
      next(e);
    }
  },


});
