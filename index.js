// Main entry point to export both Node and Express versions
const expressVersion = require('./lib/express');
const nodeVersion = require('./lib/node');

// default export
module.exports = expressVersion;

// named exports
module.exports.express = expressVersion;
module.exports.node = nodeVersion;
