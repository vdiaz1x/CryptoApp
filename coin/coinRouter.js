/**
*@module coin/coinRouter
*@param {module} coinRouter
*@param {module} coinController
*@param {module} responseHandler
*@return coinRouter
*/

module.exports = (coinRouter, coinController, responseHandler) => {

  coinRouter.route('/:id')
    .get(coinController.getOneCoin, responseHandler.sendJson)
    .put(coinController.updateCoin, responseHandler.sendJson)
    .delete(coinController.destroyCoin, responseHandler.handDestroy);

  coinRouter.route('/')
    .post(coinController.createCoin, responseHandler.handCreate);

  coinRouter.use(responseHandler.send404);
  return coinRouter;
};
