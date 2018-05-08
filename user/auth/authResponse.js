module.exports = {
  sendJson(req, res) {
    res.json(res.locals.tasks || res.locals.task);
  },
  handCreate(req, res) {
    res.set({
      location: `${req.originalUrl}/${res.locals.user.user_id}`,
    });
    res.status(201).end();
  },

  handLogout(req, res) {
    res.status(204).end();
  },

  send404(err, req, res, next) {
    console.log(error);
    res.status(404).send('nothing to see here');
  },
};
