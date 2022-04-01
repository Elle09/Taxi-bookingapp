# Sync-Module

Synchronously execute a module function

[![Build Status](https://img.shields.io/travis/marcelerz/sync-module.svg)](http://travis-ci.org/marcelerz/sync-module)
[![Coveralls Coverage](https://img.shields.io/coveralls/marcelerz/sync-module.svg)](https://coveralls.io/r/marcelerz/sync-module)
[![Code Climate Grade](https://img.shields.io/codeclimate/github/marcelerz/sync-module.svg)](https://codeclimate.com/github/marcelerz/sync-module)

[![NPM version](https://badge.fury.io/js/sync-module.svg)](https://www.npmjs.com/package/sync-module)
[![NPM License](https://img.shields.io/npm/l/sync-module.svg)](https://www.npmjs.com/package/sync-module)

[![NPM](https://nodei.co/npm/sync-module.png?downloads=true&stars=true)](https://www.npmjs.com/package/sync-module)
[![NPM](https://nodei.co/npm-dl/sync-module.png?months=3&height=2)](https://www.npmjs.com/package/sync-module)

## Installation

```shell
npm install --save sync-module
```

## Usage

**Synchronous Module:**
```js
var Promise = require('promise');

// The module should always have a function to execute
// And it should return a promise
module.exports = function (a, b) {

	return new Promise(function (resolve, reject) {

		setTimeout(function () {
			resolve(a + b + 5);
		}, 2000);
	});
};
```

**Calling code:**
```js
var syncModule = require('sync-module');

var result = syncModule(<path to file above>, [2, 7]);

// Result: 2+7+5=14
```

## License

MIT
