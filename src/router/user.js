const express = require('express')
const router = express.Router()

const Models = require("../model");
const User = Models.User;

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('User home page')
})

router.get('/list', function (req, res) {
  User.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
})

router.post('/new', function (req , res) {

  const { /*id, */name, age } = req.body;

  if ((!name) || !age) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }

  let data = new User({
  	name:name,
  	age:age
  });

  data.save((err,data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data:data });
    // res.redirect('user/list');
  });

})

/*router.get('/edit/:id',(req,res,next)=>{
	let { id } = req.params;

	User.findOne({_id:id},(err,data)=>{
		res.render('UserEdit',{
			user:data
		})
	})*/

module.exports = router