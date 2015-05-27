var fs = require('fs'),
	bl = require('bl'),
	http = require('http'),
	numResponse = 0,
	allData = [];

function logData() {
	for (var i = 0; i < allData.length; i++) {
		console.log(allData[i]);
	}
}

function doRequest(url, index) {
	http.get(url, function (response) {
		response.pipe(bl(function (error, data) {
			if (error) {
				return console.error(error);
			}

			numResponse++;
			allData[index] = data.toString();

			if (numResponse >= 3) {
				logData();
			}
		}));
	});
}

for (var i = 2; i < process.argv.length; i++) {
	doRequest(process.argv[i], i - 2);
}