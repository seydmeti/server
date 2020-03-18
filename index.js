const server = require('./server.js'),
      router = require('./router.js'),
      requestHandlers = require('./requestHandlers.js');

let handle = {};
handle['/'] = requestHandlers.root;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

let serverSetting = {
 port : 8080 ,
 IP : '127.1.1.1',
 router : router.route,
 handle : handle,
}

server.start(serverSetting);
