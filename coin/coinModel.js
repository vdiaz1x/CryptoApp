module.exports = function coinModel(db) {
  return {

    getOneCoin(coinID) {
      return db.one(`
      SELECT * FROM coins
      WHERE id = $1
      `, coinID);
    },

    createCoin(coinData) {
      return db.one(`
      INSERT INTO coins (coin_id, , coin_name, coin_symbol)
      VALUES ($/coin_id/, $/coin_name/, $/coin_symbol/)
      RETURNING *
      `, coinData);
    },

// potentially a join table need to confirm because you can never
// really have an update of a coin those will remain static as the info
// is coming from the api
  // updateCoin(coinID, coinAmount) {
  //     return db.one(`
  //     UPDATE comments
  //     SET coinAmount = $2
  //     WHERE id = $1
  //     RETURNING *
  //     `, [coinID, coinAmount]);
  //   },

    destroy(coinID) {
      return db.none(`
      DELETE FROM coins
      WHERE id = $1
      `, coinID);
    },
  };
};

