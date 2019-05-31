const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;
const url = require('url');
const path = required = required('path');



function httpHandler(req,res){
	let urlObject = url.parse(req.url);
	let url = urlObject.pathname;
	let fileName = path.join(process.cwd(),url);
	console.log('loading ' + url);
	console.log(fileName);
}

function serverMessage(){
	console.log(`Server running aat http://${hostname}:${port}`);
}

const server = http.createServer(httpHandler);
server.listen(port,hostname,serverMessage);