const path = require('path')
const manifest = require(path.resolve(
  'src',
  'crx',
  'manifest.json'))
const localCors = [
  "default-src 'self';",
  "script-src 'self' http://localhost:3000 https://localhost:3000 'unsafe-eval';",
  'connect-src http://localhost:3000 https://localhost:3000;',
  "style-src * 'unsafe-inline' 'self' blob:;",
  "img-src 'self' data:;"
]

switch (process.env.NODE_ENV) {
  case 'development':
    manifest.content_security_policy = localCors.join(' ')
    break
  default:
    break
}

manifest.version = process.env.npm_package_version

console.log(JSON.stringify(manifest))
