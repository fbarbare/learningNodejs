var fs = require('fs'),
	directory = process.argv[2],
	extension = process.argv[3];

function callback(error, data) {
	var currentFile,
		i;

	if (error) {
		console.log(error);

	} else {
		for (i = 0; i <  data.length; i++) {
			currentFile = data[i];

			if (!extension || currentFile.indexOf('.' + extension) !== -1) {
				console.log(currentFile);
			}
		}
	}
}

fs.readdir(process.argv[2], callback);