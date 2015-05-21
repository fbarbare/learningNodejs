var fs = require('fs');

function callBack(error, data) {
	var lines;

	if (error) {
		console.log(error);
	} else {
		lines = data.split('\n');
		console.log(lines.length -1);
	}
}

fs.readFile(process.argv[2], 'utf8', callBack);