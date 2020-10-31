
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lingua-scraper.cjs.production.min.js')
} else {
  module.exports = require('./lingua-scraper.cjs.development.js')
}
