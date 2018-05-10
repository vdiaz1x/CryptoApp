module.exports = function coinModel(db) {
return {

    getAllCoin(userID) {
      return db.any(`
      SELECT * FROM coins
      JOIN user_coin
      ON coins.id = user_coin.coin_id
      JOIN users
      ON users.id = user_coin.user_id
      WHERE user_id = $1
        `, userID)
    },

    getOneCoin(coinID) {
      return db.one(`
      SELECT * FROM coins
      WHERE id = $1
      `, coinID);
    },

    createCoin(coinData) {
      return db.one(`
      INSERT INTO coins (id , coin_name, coin_symbol)
      VALUES ($/id/, $/coin_name/, $/coin_symbol/)
      RETURNING *
      `, coinData);
    },

  // potentially a join table need to confirm because you can never
  // really have an update of a coin those will remain static as the info
  // is coming from the api
  updateCoin(coinID, userID, coinAmount) {
      return db.one(`
        UPDATE user_coin
        SET coin_amount = $3
        WHERE coin_id = $1
        AND user_id = $2
        RETURNING *
       `, [coinID, userID, coinAmount]);
     },

    destroyCoin(coinID) {
      return db.none(`
      DELETE FROM coins
      WHERE id = $1
      `, coinID);
    },
  };
};

