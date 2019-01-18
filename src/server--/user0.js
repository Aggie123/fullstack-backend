const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const db=require('../schema/db');
const User = require("../schema/user");

const API_PORT = 3001;
const app = express();
const router = express.Router();

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  User.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

//addUser
router.post("/addUser", (req, res) => {
  let data = new Data();

  const { userName } = req.body;

  if ((!userName) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.userName = userName;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));