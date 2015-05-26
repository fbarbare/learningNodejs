var bl = require('bl'),
	http = require('http'),
	url = process.argv[2];

function callback(response) {
	response.pipe(bl(function (error, data) {
		if (error) {
			return console.error(error);
		}

		var string = data.toString();

		console.log(string.length);
		console.log(string);
	}));
}

http.get(url, callback);