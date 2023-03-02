// setup server
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var babelpolyfill = require('babel-polyfill')
// import{noteRoute }from './route/noteRoute.js';
var noteRoute = require('./route/noteRoute')
const app = express()
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/api/v1", noteRoute)


app.get('/', (req, res) => {
    res.send('Express Hello World')
})




app.listen(1000, () => {
    console.log("server start")
})
