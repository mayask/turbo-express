function registerRoutes({ router, controller }) {
  router.route('/stock').get(controller.index)
}

module.exports = registerRoutes
