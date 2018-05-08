// this is the file for the controllers for the user routes
module.exports = userDB => ({

async login(req, res, next) {
  // try {
  //   res.locals.user = await userDB.getOneUser(req.session.user.userID, req.params.id)
  //   next();
  // } catch (e) {
  //   next(e);
  // }
  console.log('I love bananas')
},

async logout(req, res, next) {
  // try {
  //   res.locals.user = await userDB.updateUser(req.sesion.user.userID, req.body);
  //   next();
  // }
  // catch (e) {
  //   next(e);
  // }
  console.log('I told you so!')
}


})
