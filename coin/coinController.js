module.exports = coinModel => ({
  async getOneCoin(req, res, next) {
    try {
    res.locals.coins = await coinModel.getOneCoin(req.coins.coinID, req.params.id);
    next();
    } catch(e) {
      next(e);
    }
  },

  async updateCoin(req, res, next) {
    try {
    res.locals.coins = await coinModel.updateCoin(req.params.coinID, req.body.content);
    next ();
    } catch (e) {
      next(e);
    }
  },

  async destroyCoin(req, res, next) {
    try{
      res.locals.coins = await coinModel.destroyCoin(req.params.coinID);
      next ();
    }
      catch (e) {
        next(e);
    }
  },

  async createCoin(req, res, next) {
    try{
      res.locals.coins = await coinModel.createCoin(req.session.coins.coinID, req.body);
    next();
    } catch (e) {
      next(e);
    }
  },

});
