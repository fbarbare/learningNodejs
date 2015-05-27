var net = require('net'),
	strftime = require('strftime'),
	port = process.argv[2],
	server;

server = net.createServer(function (socket) {
	var date = strftime('%Y-%m-%d %H:%M', new Date());
	socket.write(date);
	socket.end();
});
server.listen(port);