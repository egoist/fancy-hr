# fancy-hr [![NPM version](https://img.shields.io/npm/v/fancy-hr.svg)](https://npmjs.com/package/fancy-hr) [![NPM downloads](https://img.shields.io/npm/dm/fancy-hr.svg)](https://npmjs.com/package/fancy-hr) [![Build Status](https://img.shields.io/circleci/project/egoist/fancy-hr/master.svg)](https://circleci.com/gh/egoist/fancy-hr)

> Yield a fancy &lt;hr /&gt; in Node applications.

## Install

```
$ npm install --save fancy-hr
```

## Usage

```js
const hr = require('fancy-hr')

hr()
//=> ----------------

hr('fire')
//=> ------fire------
```

## API

### hr([text, width, char])

#### text

Text to display in the center of hr, default is an empty string.

#### width

The width of hr, default is `15`.

#### char

The char to make up hr, default is `-`.

## License

MIT © [EGOIST](https://github.com/egoist)
