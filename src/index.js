const createExpressServer = require('./express')
const configureApp = require('./app')

function start() {
  const { app, router } = createExpressServer()

  configureApp({ router })

  app.listen(3000, () => console.log('server is listening on port 3000...'))
}

module.exports = { start }
