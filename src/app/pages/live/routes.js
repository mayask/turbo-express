function registerRoutes({ router, controller }) {
  router.route('/live').get(controller.index)
}

module.exports = registerRoutes
