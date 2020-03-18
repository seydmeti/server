function route(serverSetting , res){
	if (typeof serverSetting.handle[serverSetting.pathName] === 'function')
		serverSetting.handle[serverSetting.pathName](res);
}

exports.route = route;
