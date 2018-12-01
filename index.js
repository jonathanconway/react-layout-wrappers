'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-layout.cjs.production.js');
} else {
  module.exports = require('./react-layout.cjs.development.js');
}