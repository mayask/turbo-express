const path = require('path')
const express = require('express')
const hbs = require('express-hbs')

function createExpressApp() {
  const app = express()
  const router = express.Router()

  app.engine('hbs', hbs.express4({
    partialsDir: path.join(__dirname, '../app/views/partials'),
    layoutsDir: path.join(__dirname, '../app/views/layouts'),
  }))
  app.set('view engine', 'hbs')
  app.set('views', path.join(__dirname, '/../app/pages')),

  app.use('/public', express.static('public'))
  
  app.use(router)

  return { app, router }
}

module.exports = createExpressApp
