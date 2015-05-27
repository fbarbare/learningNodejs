var http = require('http'),
	url = process.argv[2];

function callback(response) {
	function onSuccess(data) {
		console.log(data);
	}
	function onError(error) {
		console.error(error);
	}
	response.setEncoding('utf8');
	response.on('data', onSuccess);
	response.on('error', onError);
}

http.get(url, callback);