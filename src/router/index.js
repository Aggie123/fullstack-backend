const express = require("express");
const app = express();
const router = express.Router();

const API_PORT = 3001;

var user = require('./user')
// import user from './user'



app.use('/user', user)

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));