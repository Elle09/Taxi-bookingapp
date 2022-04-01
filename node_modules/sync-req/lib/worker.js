var thenRequest = require('then-request');

module.exports = function (method, url, options) {

	return thenRequest(method, url, options).then(function (response) {

		return { error: null, response: response };

	}, function (err) {
		return { error: true, response: err.message };

	});
};
