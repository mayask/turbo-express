const createIndex = require('./pages/index')
const createLive = require('./pages/live')
const createStock = require('./pages/stock')

function configure({ router }) {
  createIndex({ router })
  createLive({ router })
  createStock({ router })
}

module.exports = configure
