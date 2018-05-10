module.exports  = function coinModel(db) {
  return {

  getOneCoin(coinID) {
    return db.one(`
      SELECT * FROM coins
      WHERE id = $1
      `, coinID);
  },

  createCoin(coinData){
    return db.one (`
     INSERT INTO coins ()
      `)
  }
 }
}
