const assert = require('assert');
const errors = require('./index.js');

assert(Object.keys(errors).length > 0, 'Error map parse failed');
console.log(errors);
