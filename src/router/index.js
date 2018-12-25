const express = require("express");
const app = express();

//import router module
let home = require('./home')
let user = require('./user')


app.use('/api',home)
app.use('/api/user', user)

module.exports = app