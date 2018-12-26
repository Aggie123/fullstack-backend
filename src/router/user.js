const express = require('express')
const router = express.Router()

const User = require("../model/user");

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


router.get('/list', function (req, res) {
  User.find((err, data) => {
  	console.log('list0')
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
})

router.post('/new', function (req, res) {
  let data = new User();

  const { id, name, age } = req.body;

  if ((!id && id !== 0) || !name) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.name = name;
  data.id = id;
  data.age = age;

  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data:data });
  });

  //res.send('New users')
})

module.exports = router