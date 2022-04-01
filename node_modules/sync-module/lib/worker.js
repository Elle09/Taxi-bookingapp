var JSONB = require('json-buffer');
var fs = require('fs');

try {
	var execFile = process.argv[2];
	var inputFile = process.argv[3];
	var outputFile = process.argv[4];

	var input = fs.readFileSync(inputFile, { encoding: 'utf8' });
	var args = JSONB.parse(input);

	// Load execution file
	var fn = require(execFile);

	// Call function and receive result
	fn.apply(this, args).then(function (value) {

		// Successful
		fs.writeFileSync(outputFile, JSONB.stringify(value), { encoding: 'utf8' });
		process.exit(0);

	}).then(null, function (err) {

		// Error
		fs.writeFileSync(outputFile, JSONB.stringify(getError(err)), { encoding: 'utf8' });
		process.exit(1);
	});

} catch(err) {

	// Error
	fs.writeFileSync(outputFile, JSONB.stringify(getError(err)), { encoding: 'utf8' });
	process.exit(2);
}

function getError(err) {
	"use strict";

	return {
		columnNumber: err.columnNumber,
		description: err.description,
		fileName: err.fileName,
		lineNumber: err.lineNumber,
		message: err.message,
		name: err.name,
		number: err.number,
		stack: err.stack,
	};
}
