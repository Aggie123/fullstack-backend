const express = require("express");
const app = express();
const bodyParser = require('body-parser')

//import router module
let home = require('./home')
let user = require('./user')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api',home)
app.use('/api/user', user)

//Test
/*const router = express.Router();
const User = require("../model/user");

router.get('/api/user', function (req, res) {
  res.send('User home page')
})

// define the about route
router.get('/api/about', function(req, res) {
  res.send('About user');
});

router.get('/api/user/list', function (req, res) {
	console.log('list0')

  User.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
})

router.post('/api/uesr/new', function (req , res) {
	console.log('new',req,res);
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

  data.save((err,data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data:data });
    //res.redirect('user/list');
  });

})*/

module.exports = app