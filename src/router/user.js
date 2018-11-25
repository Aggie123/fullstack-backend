const express = require('express')
const router = express.Router()

const User = require("../schema/user");

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
	/*User.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });*/
  res.send('User home page')
})
// define the about route
router.get('/new', function (req, res) {
  res.send('New users')
})

module.exports = router