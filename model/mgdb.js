let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost/27017";

MongoClient.connect(url,(err,db)=>{
	if(err) throw err;

	console.log('mgdb created!');

	let dbase = db.db('runoob');
	let newobj={name:'A1',age:1,gender:'female'};

	//create collection
	/*dbase.createCollection('site',(err,res)=>{
		if(err) throw err;

		console.log('collection created!')

		db.close();
	})*/

	//update collection
	dbase.collection('site').insertOne(newobj,(err,res)=>{
		if (err) throw err;

		console.log('document inserted!');
		
		db.close;
	})

})