# gh-put

[![NPM version](https://img.shields.io/npm/v/gh-put.svg)](https://www.npmjs.com/package/gh-put)
[![Build Status](https://travis-ci.org/shinnn/gh-put.svg?branch=master)](https://travis-ci.org/shinnn/gh-put)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/gh-put.svg)](https://coveralls.io/github/shinnn/gh-put?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/gh-put.svg)](https://david-dm.org/shinnn/gh-put)
[![devDependency Status](https://david-dm.org/shinnn/gh-put/dev-status.svg)](https://david-dm.org/shinnn/gh-put#info=devDependencies)

A [Node](https://nodejs.org/) module to create a [`PUT`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.6) request to the [Github API](https://developer.github.com/v3/)

```javascript
const ghPut = require('gh-put');

ghPut('gists/2790533/star', {
  headers: {
    'user-agent': 'your application name'
  },
  token: 'your access token'
}).then(response => {
  response.headers.status; //=> '204 No Content'
  console.log('Successfully starred https://gist.github.com/domenic/2790533');
});
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install gh-put
```

## API

```javascript
const ghPut = require('gh-put');
```

### ghPut(*url* [, *options*])

*url*: `String` ("path" part of a Github API URL)  
*options*: `Object` ([`gh-get` options](https://github.com/shinnn/gh-get#options))  
Return: `Object` ([`Promise`](https://promisesaplus.com/) instance)

Almost the same as [gh-get](https://github.com/shinnn/gh-get), except that the `method` option defaults to `'PUT'` and unchangable.

## License

Copyright (c) 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
