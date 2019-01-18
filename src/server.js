require('./model')
let app = require('./router/index')
const API_PORT = 3001;

// launch our backend into a port
let server = app.listen(API_PORT, '127.0.0.1',(req,res,next) => {
	let host = server.address().address;
	let port = server.address().port;
	console.log(__dirname)
	console.log(`LISTENING ON PORT ${host} ${API_PORT}`)
});