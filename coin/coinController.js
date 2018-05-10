module.exports = coinModel => ({

  async getAllCoin(req, res, next) {
    try {
      console.log(req.user.userID)
    res.locals.coins = await coinModel.getAllCoin(req.user.userID);
    next();
    } catch(e) {
      next(e);
    }
    console.log(res.locals.coins)
  },

  async getOneCoin(req, res, next) {
    try {
      console.log(req.params.coinID)
    res.locals.coins = await coinModel.getOneCoin(req.params.coinID);
    next();
    } catch(e) {
      next(e);
    }
  },

  async updateCoin(req, res, next) {
    try {
      console.log(req.body)
    res.locals.coins = await coinModel.updateCoin(req.params.coinID, req.user.userID, req.body.coin_amount);
    next ();
    } catch (e) {
      next(e);
    }
  },

  async destroyCoin(req, res, next) {
    try {
      res.locals.coins = await coinModel.destroyCoin(req.params.coinID);
      next ();
    }
      catch (e) {
        next(e);
    }
  },

  async createCoin(req, res, next) {
    try {
      console.log(req.body)
      res.locals.coin = await coinModel.createCoin(req.body);
      next();
    } catch (e) {
      next(e);
    }
  },

});
