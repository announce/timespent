const path = require('path')
const secrets = require(path.resolve('src/crx/config/secrets'))

const createFirebaseSecrets = (config) => {
  const apiKey = process.env.npm_config_FIREBASE_API_KEY || ''
  if (apiKey === '') {
    throw new Error('Specify the required environment value "FIREBASE_API_KEY".')
  }
  config.firebase['apiKey'] = apiKey
  return config.firebase
}
console.log(JSON.stringify({
  firebase: createFirebaseSecrets(secrets)
}))
