// this is the file for the controllers for the user routes
module.exports = userDB => ({

async getOneUser(req, res, next) {
  try {
    res.locals.user = await userDB.getOneUser(req.session.user.userID, req.params.id)
    next();
  } catch (e) {
    next(e);
  }
},

async updateUser(req, res, next) {
  try {
    res.locals.user = await userDB.updateUser(req.sesion.user.userID, req.body);
    next();
  }
  catch (e) {
    next(e);
  }
},

async addUser(req, res, next) {
  try {
    res.locals.user = await userDB.addUser(req.session.user.userID, req.body);
  }
  catch (e) {
    next(e);
  }
}

})
