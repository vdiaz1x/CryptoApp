module.exports = {
  sendJson(req, res) {
    res.json(res.locals.coins || res.locals.coins);
  },
  handCreate(req, res) {
    res.set({
      location: `${req.originalUrl}/${res.locals.coins.coin_id}`,
    });
    res.status(201).end();
  },

  deleteHandle(req, res) {
    res.status(204).end();
  },

  send404(err, req, res, next) {
    console.log(error);
    res.status(404).send('This page may have depricated please try again at another time.');
  },
};
