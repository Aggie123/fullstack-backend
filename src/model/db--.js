/*// mongoose 链接
// 
var mongoose = require('mongoose');
//连接相应数据库，在这里连接的是student_dormitory数据库
//var db = mongoose.createConnection('mongodb://127.0.0.1:27017/student_dormitory');
var db = mongoose.createConnection('mongodb://<admin>:<admin2018>@ds161426.mlab.com:61426/local_library');
//mongodb://<dbuser>:<dbpassword>@ds161426.mlab.com:61426/local_library

// 链接错误
db.on('error', function(error) {
    console.log(error);
});

// 链接成功
db.once('open', function(error) {
    console.log("数据库连接成功");
});

module.exports = db;*/

const mongoose = require("mongoose");

const API_PORT = 3001;

// this is our MongoDB database
// const dbRoute = "mongodb://jelo:a9bc839993@ds151382.mlab.com:51382/jelotest";
const dbRoute = "mongodb://admin:admin2018@ds161426.mlab.com:61426/local_library"

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;