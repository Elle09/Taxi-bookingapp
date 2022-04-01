# Sync-Req

Synchronous request

[![Build Status](https://img.shields.io/travis/marcelerz/sync-req.svg)](http://travis-ci.org/marcelerz/sync-req)
[![Coveralls Coverage](https://img.shields.io/coveralls/marcelerz/sync-req.svg)](https://coveralls.io/r/marcelerz/sync-req)
[![Code Climate Grade](https://img.shields.io/codeclimate/github/marcelerz/sync-req.svg)](https://codeclimate.com/github/marcelerz/sync-req)

[![NPM version](https://badge.fury.io/js/sync-req.svg)](https://www.npmjs.com/package/sync-req)
[![NPM License](https://img.shields.io/npm/l/sync-req.svg)](https://www.npmjs.com/package/sync-req)

[![NPM](https://nodei.co/npm/sync-req.png?downloads=true&stars=true)](https://www.npmjs.com/package/sync-req)
[![NPM](https://nodei.co/npm-dl/sync-req.png?months=3&height=2)](https://www.npmjs.com/package/sync-req)

## Installation

```shell
npm install --save sync-req
```

## Usage

```js
var request = require('sync-req');

// Synchronous
var res = request('GET', 'http://www.yahoo.com');
console.log(res);
```

## License

MIT
