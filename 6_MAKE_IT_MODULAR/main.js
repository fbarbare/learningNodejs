var filterFiles = require('./6-module.js'),
	files;

function onFileReceived(error, files) {
	var i;

	if (error) {
		console.log(error);
		return false;
	} else {
		for (i = 0; i < files.length; i++) {
			console.log(files[i]);
		}
	}
}

files = filterFiles(process.argv[2], process.argv[3], onFileReceived);