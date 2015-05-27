var http = require('http'),
	url = require('url'),
	server;

function getTimeObject(iso) {
	var date = new Date(iso);

	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}
}
function getUnixTimeObject(iso) {
	return {
		unixtime: (new Date(iso)).getTime()
	}
}

server = http.createServer(function (request, response) {
	if (request.method !== 'GET') {
		return response.end('It is not a GET');
	}

	var requestUrl = url.parse(request.url, true);

	var objectToReturn;
	switch (requestUrl.pathname) {
		case '/api/parsetime':
			objectToReturn = getTimeObject(requestUrl.query.iso);
			break;
		case '/api/unixtime':
			objectToReturn = getUnixTimeObject(requestUrl.query.iso);
			break;
	}

	response.writeHead(200, {
		'Content-Type': 'application/json'
	});

	response.end(JSON.stringify(objectToReturn));
});
server.listen(process.argv[2]);