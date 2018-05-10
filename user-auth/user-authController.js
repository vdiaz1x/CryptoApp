// this is the file for the controllers for the user routes

// importing bcrypt
const bcrypt = require('bcrypt');

module.exports = userModel => ({
  // controller
  async register(req, res, next) {
    try {
      // this hashes the password from the req.body and saves it back in the same place
      req.body.password_hash = await bcrypt.hash(req.body.password, 11);

      // model used to save new user using the new user info stored in req.body
      console.log(req.body);

      // saves data grabbed by model into variable
      const userData =  await userModel.save(req.body);

      console.log(userData);
      next();
    } catch (err) { next(err); }
  },

  async login(req, res, next) {
    try {
      const { username, password } = req.body;

      const user = await userModel.findByUsername(username);
      // bcrypt, for some reason, doesn't reject
      // we have to manually throw an error which will reject the promise
      const valid = await bcrypt.compare(password, user.password_hash);

      if (!valid) {
        throw { message: 'Incorrect Password' };
      }

      req.user.userID = user;
      next();
    } catch (err) {
      next(err);
    }

    console.log('I love bananas');
  },

  async logout(req, res, next) {
  // this destroys the req.session user data
  // willh have to be changed for when tokens are implemented
    req.session.destroy(err => next(err));

    console.log('I told you so!');
  },

  loginRequired: [
    /* this is either going to resolve to next(false) or next(null) */
    (req, res, next) => next(!req.user.userID || null),
    (err, req, res, next) => res.redirect('/login'),
  ],

});
