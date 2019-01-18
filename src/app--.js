//用express框架起HTTP服务
let app = require('./router/index')
const API_PORT = 3001;

// launch our backend into a port
let server = app.listen(API_PORT, '127.0.0.1',(req,res,next) => {
	let host = server.address().address;
	let port = server.address().port;
	console.log(__dirname)
	console.log(`LISTENING ON PORT ${host} ${API_PORT}`)
});

// 加载所需要的模块
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

/**
 * 创建数据库名称并连接
 * Connecting to Mongod instance.
 */
// const dbHost = 'mongodb://localhost/testDb';
//ds143594.mlab.com:43594/sunshine
const dbHost = 'mongodb://nana:nana123@ds143594.mlab.com:43594/sunshine';
mongoose.connect(dbHost);
const db = mongoose.connection;
db.on('error', function () {
    console.log('Database connection error.');
});
db.once('open', function () {
    console.log('The Database has connected.')
});

//模板
const UserSchema = new Schema({
    username: String,//用户名
    sex: String,// 性别
    age: Number, // 年龄
},{collection:'user'}) 
// 注意这里一定要带有collection，否则mongoose会在下面model时对user添加后缀s.

const Models = {
    User : mongoose.model('user', UserSchema)
};

module.exports = Models;