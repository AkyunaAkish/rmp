var express = require('express')
var router = express.Router()
var service = require('node-authorize-net')(process.env.API_LOGIN,process.env.KEY)

router.get('/sendPayment', function(req, res, next) {
  if (req.body.amount && req.body.cardNumber && req.body.expirationYear && req.body.expirationMonth) {
    service.authCaptureTransaction(req.body.amount, req.body.cardNumber, req.body.expirationYear, req.body.expirationMonth)
    .then(function (transaction) {
      console.log('TRANSACTION', transaction)
      res.status(200).json(transaction)
    })
  } else {
    res.status(200).json({error: 'not enough information provided to make a transaction'})
  }
})

module.exports = router
