// 加载所需要的模块
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('./user')

/**
 * 创建数据库名称并连接
 * Connecting to Mongod instance.
 */
const dbHost = 'mongodb://nana:nana123@ds143594.mlab.com:43594/sunshine';
mongoose.connect(dbHost);
const db = mongoose.connection;

db.on('error', function () {
    console.log('Database connection error.');
});

db.once('open',function(){
	console.log('The Database has connected.')
  User.find({},{},function (err, users) {
    // mongoose.connection.close();
    console.log("Username supplied",users);
    //doSomethingHere 
  })
});

const Models = {
    User : User
};

module.exports = Models;