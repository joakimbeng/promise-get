# promise-get

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> Get a property from the object a promise resolves to, using a [dot path](https://github.com/sindresorhus/dot-prop)

## Installation

Install `promise-get` using [npm](https://www.npmjs.com/):

```bash
npm install --save promise-get
```

## Usage

### Module usage

```javascript
var get = require('promise-get');

get('key.deep', Promise.resolve({key: {deep: 'hello'}}))
  .then(function (val) {
    // val === 'hello'
  });
```

## API

### `get(property, promise)`

| Name | Type | Description |
|------|------|-------------|
| `property` | `String`| A dot path to get value from resolved promise |
| `promise` | `Promise`| The promise which resolves to the object you want a property from |

Returns: `Promise`, which resolves to the property found in `promise`'s resolved object.

## Related

* [`promise-or`](https://github.com/joakimbeng/promise-or)
* [`promise-and`](https://github.com/joakimbeng/promise-and)
* [`promise-if`](https://github.com/joakimbeng/promise-if)
* [`promise-not`](https://github.com/joakimbeng/promise-not)
* [`promise-all`](https://github.com/joakimbeng/promise-all)

## License

MIT © Joakim Carlstein

[npm-url]: https://npmjs.org/package/promise-get
[npm-image]: https://badge.fury.io/js/promise-get.svg
[travis-url]: https://travis-ci.org/joakimbeng/promise-get
[travis-image]: https://travis-ci.org/joakimbeng/promise-get.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
