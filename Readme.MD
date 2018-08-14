# Node GNU-clacks

A man is not dead while his name is still spoken. Add an 'X-Clacks-Overhead' Header to your Node/Express app.

See [http://www.gnuterrypratchett.com](http://www.gnuterrypratchett.com "GNU Terry Pratchett")

## Usage
- Import the module and tell your app to use as middleware.

## Options
- Add an array of names to be passed along with the default, 'Terry Pratchett'.

## Example

```js

const express = require('express');
const app = express();

const gnuHeader = require('gnu-clacks');

app.use(gnuHeader());
app.use(gnuHeader(['Moist', 'Adora', 'Reacher']));

```
