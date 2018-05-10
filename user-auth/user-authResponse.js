module.exports = {
  sendJson(req, res) {
    res.json(res.locals.user);
  },

  handleCreateUser(req, res) {
    // res.set({
    //   location: `${req.originalUrl}/${res.locals.user.user_id}`,
    // });
    res.status(201).end();
  },

  handleLogin(rq, res) {
    // werk it
  },

  handleLogout(req, res) {
    // werq it
  },

  send404(err, req, res, next) {
    console.log(err);
    res.status(404).send('nothing to see here');
  },
};
