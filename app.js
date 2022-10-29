const express = require('express')
const app = express()
// require('./db')
const cervezas = require('./routes/cervezas')
const bares = require('./routes/bares')
//MIDDLEWARE
app.use(express.json())

//ROUTES
app.use('/cervezas', cervezas)
app.use('/bares', bares)



app.listen(3000)