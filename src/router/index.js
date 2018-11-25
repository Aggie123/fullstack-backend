const express = require("express");
const app = express();

//import router module
let home = require('./home')
let user = require('./user')


app.use('/',home)
app.use('/user', user)

module.exports = app