const express = require('express')
const path = require('path')
const PORT = 8080
const app = express()

app.use(express.static(path.join(__dirname, './app/public')))

const db = require('./app/models/index')

require('./app/routing/htmlRoutes')(app)
require('./app/routing/apiRoutes')(app)

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(`Listening on http://localhost:${PORT}`)
    })
})
