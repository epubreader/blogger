const myConfig = require('../configs/index');
const express = require('express')
const session = require('express-session');
const client = require("redis").createClient(myConfig.redis)
const redisStore = require('connect-redis')(session);
const merge = require('webpack-merge')
const consola = require('consola')
const api = require('./api/index.js')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser');
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.use(session(merge(myConfig.session, {
  store: new redisStore(merge(myConfig.redisStore, { client: client }))
})))
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/v1', api.apiv1)
app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
