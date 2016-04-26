# escape-invisibles [![travis][travis-image]][travis-url][![npm][npm-image]][npm-url]
[travis-image]: https://img.shields.io/travis/laat/escape-invisibles.svg?style=flat
[travis-url]: https://travis-ci.org/laat/escape-invisibles
[npm-image]: https://img.shields.io/npm/v/escape-invisibles.svg?style=flat
[npm-url]: https://npmjs.org/package/escape-invisibles
> convert invisible characters to plain text


## Install

```
$ npm install --save escape-invisibles
```

## Usage

```js
var escapeInvisibles = require('escape-invisibles');

escapeInvisibles('\tfoo\r\n'); //=> '<tab>foo<CR><LF>\n'
```

## License

MIT © [Sigurd Fosseng](https://github.com/laat)
