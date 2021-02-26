function registerRoutes({ router, controller }) {
  router.route('/').get(controller.index)
}

module.exports = registerRoutes
