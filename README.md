# Express Extensions

Small extensions to [Express](https://expressjs.com/)

## Async Router

Define `async` routes:

```javascript
const express = require('express')
const { asyncRoute, respond } = require('express-extensions')
const getAccountInfo = require('./getAccountInfo')

const app = express()
const router = asyncRouter()

router.$get('/accounts/:accountId', async (req, res) => {
  const { accountId } = req.params
  const accountInfo = await getAccountInfo(accountId)
  respond(accountInfo, res) // responds with 404 if accountInfo is falsey.
})

app.use(router)
```

## Start/Stop server

If your HTTP server has open connections (such as `WebSocket` or `EventSource`), `server.close` will hang.
This isn't good for tests. The `WebServer` class will `destroy` those connections first, preventing this.

`WebServer` also provides a `Promise` API for starting and stopping the server, and also lets you choose
a random port:

```javascript
const express = require('express')
const { WebServer } = require('express-extensions')
const app = express()

const webServer = new WebServer(app)
const port = await webServer.listen(9988) // use 0 to select a random port

await webServer.stop() // This will kill keep-allive connections too
```