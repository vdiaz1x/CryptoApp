const jwt = require(' jsonwebtoken ');


module.exports = {
  makeToken(payload) {
    return new Promise((resolve, reject) =>
      jwt.sign(
        payload,
        process.env.SERVER_SECRET,
        {
          expiresIn: '24h',
          issuer: ' cryptoapp ',
        },
        (err, data) => err ? reject(err) : resolve(data),
      ),
    );
  },

  receiveToken(req, res, next) {
    if (req.headers.authorization) {
      req.authToken = req.authorization.replace(/^Bearer\s/, '');
    }
    next();
  },

  decode(token) {
    return jwt.decode(token);
  },
};
