const path = require('path')
const manifest = require(path.resolve('src/crx/manifest.json'))

manifest.version = process.env.npm_package_version

console.log(JSON.stringify(manifest))
