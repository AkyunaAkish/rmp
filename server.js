process.env.NODE_ENV === 'development' ? require('dotenv').config() : null
var express = require('express')
var path = require('path')
var logger = require('morgan')
var favicon = require('serve-favicon')
var bodyParser = require('body-parser')
var cors = require('cors')
var compression = require('compression')

var payments = require('./api_routes/payments')

var app = express()

app.use(favicon(__dirname + '/dist/images/logo/whiteRMPLogo.ico'));
app.use(cors())
app.use(compression())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))

app.use('/payments', payments)

app.all('*', function(req,res,next) {
  res.sendFile('index.html', { root: `${__dirname}/dist/`})
})

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: err
    })
  })
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {}
  })
})


module.exports = app
