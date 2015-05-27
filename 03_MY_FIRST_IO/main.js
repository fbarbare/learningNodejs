var fs = require('fs'),
	file = fs.readFileSync(process.argv[2]).toString(),
	lines;

lines = file.split('\n');

console.log(lines.length - 1);