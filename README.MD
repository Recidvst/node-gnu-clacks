
# Node/Express GNU Clacks

A man is not dead while his name is still spoken. Add an 'X-Clacks-Overhead' Header to your vanilla Node or Express app.

See [http://www.gnuterrypratchett.com](http://www.gnuterrypratchett.com "GNU Terry Pratchett")

[![npm](https://img.shields.io/npm/dt/node-gnu-clacks.svg)]()
[![npm](https://img.shields.io/npm/v/node-gnu-clacks.svg)]()
[![license](https://img.shields.io/github/license/recidvst/node-gnu-clacks.svg)]()

## Install
- Install with [npm](https://www.npmjs.com/package/node-gnu-clacks "node-gnu-clack on NPM") or download and create your own module.
```js
npm install node-gnu-clacks --save
```

## Usage
- Import the module and tell your app to use as middleware:

```js
const { node: gnuHeaderNode } = require('node-gnu-clacks');
const { express: gnuHeaderExpress } = require('node-gnu-clacks');
```

_note: you can also use `const gnuHeader = require('node-gnu-clacks');` for express apps for backwards compatibility with v1._

## Options
**string[] ghosts = ['Terry Pratchett']**  

Add an array of names to be passed. This is in addition to the default, 'Terry Pratchett', which will always be added.

## Example with a vanilla Node app

```js
const http = require('http');
const { node: gnuHeaderNode } = require('node-gnu-clacks');

http.createServer((req, res) => {
    const addClacksHeader = gnuHeaderNode(['Moist', 'Adora', 'Reacher']);
    addClacksHeader(res);
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('A man is not dead while his name is still spoken.\n');
}).listen(3000);
```

## Example with an Express app

```js
const express = require('lib/express');
const { express: gnuHeaderExpress } = require('node-gnu-clacks');

const app = express();

app.use(gnuHeaderExpress());
or
app.use(gnuHeaderExpress(['Moist', 'Adora', 'Reacher']));

app.get('/', (req, res) => {
    res.send('A man is not dead while his name is still spoken.');
});

app.listen(3000);
```
