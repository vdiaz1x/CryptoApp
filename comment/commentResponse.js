module.exports = {
  sendJson(req, res) {
    res.json(res.locals.comment || res.locals.comments);
  },

  createHandler(req, res) {
    res.status(201).end();
  },

  deleteHandler(req, res) {
    res.status(204).end();
  },

  send404(err, req, res, next) {
    console.log(err);
    res.status(404).send('Please come back this page is under development');
  },
};
