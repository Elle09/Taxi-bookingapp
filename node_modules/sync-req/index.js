var syncModule = require('sync-module');
var path = require('path');
var HttpResponse = require('http-response-object');

module.exports = function (method, url, options) {
	var result;

	result = syncModule(path.join(__dirname, 'lib', 'worker.js'), [method, url, options]);

	if (result.error) {
		throw new Error(result.response);
	}

	return new HttpResponse(result.response.statusCode, result.response.headers, result.response.body);
};

