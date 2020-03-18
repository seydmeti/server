const http = require('http'),
      url = require('url');

function start(serverSetting){
	function onRequest(req , res){
		serverSetting.pathName = url.parse(req.url).pathname;
		serverSetting.router(serverSetting , res)
	}
	http.createServer(onRequest).listen(serverSetting.port , serverSetting.IP);
	console.log(`Server has started at http://${serverSetting.IP}:${serverSetting.port}`);
}

exports.start = start;
