module.exports = coinModel => ({

  async getAllCoin(req, res, next) {
    try {
      console.log(req.params.coinID)
    res.locals.coin = await coinModel.getAllCoin();
    next();
    } catch(e) {
      next(e);
    }
  },

  async getOneCoin(req, res, next) {
    try {
      console.log(req.params.coinID)
    res.locals.coin = await coinModel.getOneCoin(req.params.coinID);
    next();
    } catch(e) {
      next(e);
    }
  },

  async updateCoin(req, res, next) {
    try {
    res.locals.coin = await coinModel.updateCoin(req.params.coinID, req.body.content);
    next ();
    } catch (e) {
      next(e);
    }
  },

  async destroyCoin(req, res, next) {
    try {
      res.locals.coin = await coinModel.destroyCoin(req.params.coinID);
      next ();
    }
      catch (e) {
        next(e);
    }
  },

  async createCoin(req, res, next) {
    try {
      res.locals.coin = await coinModel.createCoin(req.body);
      next();
    } catch (e) {
      next(e);
    }
  },

});
