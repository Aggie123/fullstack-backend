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
	/*User.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });*/
  res.send('User home page')
})

// define the about route
router.get('/about', function(req, res) {
  res.send('About user');
});

router.get('/list', function (req, res) {
	// res.send('user list');
  User.find((err, data) => {
    console.log('list data',data);
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
})

router.post('/test', function(req,res){
	return console.log('req',req)
	// return res.json({req:req.body})
})

router.post('/new', function (req , res) {

  // res.send(req.body)
  const { /*id, */name, age } = req.body;

  /*if ((!id && id !== 0) || !name) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }*/

  let data = new User({
  	name:name,
  	age:age
  });

  res.send(data);

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