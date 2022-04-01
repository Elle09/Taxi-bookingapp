var execSync = require('child_process').execSync;
var fs = require('fs');
var temp = require('temp-fs');
var path = require('path');
var JSONB = require('json-buffer');

module.exports = function (filePath, args) {

	if (args === undefined) {
		args = [];
	}

	if (typeof args !== 'object' || args.length === undefined) {
		throw new Error('Arguments should be an array.');
	}

	var content = null;
	var result = null;
	var error = false;

	var inputFile = temp.name();
	var outputFile = temp.name();

	try {

		// Prepare
		fs.writeFileSync(inputFile, JSONB.stringify(args), {encoding: 'utf8'});
		var workerPath = path.join(__dirname, 'lib', 'worker.js');

		// Execute synchronously
		execSync('node "' + workerPath + '" "' + filePath + '" "' + inputFile + '" "' + outputFile + '"').toString();

	} catch (err) {
		error = true;

	} finally {

		if (fs.existsSync(inputFile)) {
			content = fs.readFileSync(outputFile, {encoding: 'utf8'});
		}
		result = JSONB.parse(content);

		if (fs.existsSync(inputFile)) {
			fs.unlinkSync(inputFile);
		}
		if (fs.existsSync(outputFile)) {
			fs.unlinkSync(outputFile);
		}
	}

	if (error) {
		throw result;
	}

	return result;
};

