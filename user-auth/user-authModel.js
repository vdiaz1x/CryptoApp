// this is the file for the models for the user routes
// find by id and upsert borrowed from class work

module.exports = function users(db) {
  return {
    // find user by the user id
    findByUserId(id) {
      return db.one(`
      SELECT *
        FROM users
       WHERE id = $1
    `, id);
    },

    // find user by username
    findByUsername(username) {
      return db.one(`
      SELECT *
        FROM users
       WHERE username = $1
    `, username);
    },

    // upsert = (insert or update)
    // this inserts user into the db
    // if user already exists then it updates user info
    save(user) {
      return db.one(`
      INSERT INTO users (
        username,
        password_hash,
        email,
        firstname,
        lastname,
        trader
      )
      VALUES (
        $/username/,
        $/password_hash/,
        $/email/,
        $/firstname/,
        $/lastname/,
        $/trader/
      )
      ON CONFLICT (username) DO UPDATE
      SET
        username        = $/username/,
        password_hash   = $/password_hash/,
        email           = $/email/,
        firstname       = $/firstname/,
        lastname        = $/lastname/,
        trader          = $/trader/
      RETURNING *
    `, user);
    },
  };
};
