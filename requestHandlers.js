exports.root = function root(res){
	res.writeHead(200);
	res.end('Request for / recieved!');
}

exports.start = function start(res){
	res.writeHead(200);
	res.end('Request for /start recieved!');
}

exports.upload = function upload(res){
	res.writeHead(200);
	res.end('Request for /upload recieved!');
}
