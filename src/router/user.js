var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('User home page')
})
// define the about route
router.get('/new', function (req, res) {
  res.send('New users')
})

module.exports = router