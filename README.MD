
# Node GNU Clacks

A man is not dead while his name is still spoken. Add an 'X-Clacks-Overhead' Header to your Node/Express app.

See [http://www.gnuterrypratchett.com](http://www.gnuterrypratchett.com "GNU Terry Pratchett")

## Install
- Install with [npm](https://www.npmjs.com/package/node-gnu-clacks "node-gnu-clack on NPM") or download and create your own module.
```js
npm install node-gnu-clacks --save
```

## Usage
- Import the module and tell your app to use as middleware.

## Options
- Optionally, add an array of names to be passed along with the default, 'Terry Pratchett'.

## Example

```js

const express = require('express');
const app = express();

const gnuHeader = require('node-gnu-clacks');

app.use(gnuHeader());
or
app.use(gnuHeader(['Moist', 'Adora', 'Reacher']));

```

[![npm](https://img.shields.io/npm/dt/node-gnu-clacks.svg)]()
[![npm](https://img.shields.io/npm/v/node-gnu-clacks.svg)]()
[![license](https://img.shields.io/github/license/recidvst/node-gnu-clacks.svg)]()
