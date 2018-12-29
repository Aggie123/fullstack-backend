//Set up mongoose connection
let mongoose = require('mongoose');

const dbName = 'sunshine';

//local test database api
const mongoDBTestUrl = "mongodb://localhost:27017/sunshine";

//online database api
const mongoDBUrl = 'mongodb://nana:nana123@ds143594.mlab.com:43594/sunshine';

mongoose.connect(mongoDBUrl);

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/*
create additional connections 
*/
//mongoose.createConnection()

/*MongoClient.connect(url,(err,db)=>{

	if(err) throw err;

	console.log('mgdb created!');

	let dbase = db.db(dbName);

	db.close;

})*/