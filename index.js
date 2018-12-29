'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-layout-wrappers.cjs.production.js');
} else {
  module.exports = require('./react-layout-wrappers.cjs.development.js');
}