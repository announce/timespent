const path = require('path');

switch (process.env.NODE_ENV) {
  case 'development':
    require(path.resolve('webpack/development.config.js'))
    break
  default:
    require(path.resolve('webpack/production.config.js'))
    break
}


