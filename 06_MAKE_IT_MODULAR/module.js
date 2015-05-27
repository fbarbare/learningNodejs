var fs = require('fs');

function filterByExtension(files, extension) {
	var i,
		currentFile,
		matchingFiles = [];

	for (i = 0; i <  files.length; i++) {
		currentFile = files[i];

		if (!extension || currentFile.indexOf('.' + extension) !== -1) {
			matchingFiles.push(currentFile);
		}
	}

	return matchingFiles;
}

module.exports = function (pathToDirectory, filesExtension, callback) {
	function onReaddir(error, data) {
		var files;

		if (error) {
			return callback(error);
		} else {
			files = filterByExtension(data, filesExtension);
			callback(null, files);
		}
	}

	fs.readdir(pathToDirectory, onReaddir);
};