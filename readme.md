# escape-invisibles 

> convert invisible characters to plain text

## Install

```
$ npm install --save escape-invisibles
```

## Usage

```js test
var escapeInvisibles = require("escape-invisibles");

escapeInvisibles("\tfoo\r\n"); //=> '<tab>foo<CR><LF>\n'
```

## License

MIT © [Sigurd Fosseng](https://github.com/laat)
