const registerRoutes = require('./routes')
const createController = require('./controller')

function createIndex({ router }) {
  const controller = createController()

  registerRoutes({ router, controller })
}

module.exports = createIndex
