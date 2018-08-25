// flow
const path = require('path')
const secret = require(path.resolve('config/secret'))

const main = (): string => {
  const env = process.env
  return JSON.stringify({
    firebase: buildFirebaseConfig(env)
  })
}

const buildFirebaseConfig = (env: Object) => {
  const apiKey: string = env.FIREBASE_API_KEY || ''
  if (apiKey === '') {
    throw new Error('Specify the required environment variable "FIREBASE_API_KEY".')
  }
  return {
    ...secret.firebase,
    ...{apiKey: apiKey}
  }
}

process.stdout.write(main())
