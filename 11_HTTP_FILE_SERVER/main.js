var http = require('http'),
	fs = require('fs'),
	port = process.argv[2],
	fileLocation = process.argv[3],
	server;

server = http.createServer(function (request, response) {
	var file = fs.createReadStream(fileLocation);
	file.pipe(response);
});
server.listen(port);