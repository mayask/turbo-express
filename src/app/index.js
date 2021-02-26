const createIndex = require('./pages/index')

function configure({ router }) {
  const index = createIndex({ router })
}

module.exports = configure
