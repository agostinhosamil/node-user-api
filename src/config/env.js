const isProduction = Boolean (process.env.NODE_ENV === 'production')

if (!isProduction) {
  const path = require ('path')
  const dotenv = require ('dotenv')

  const env = process.env.NODE_ENV === 'test' ? '.test' : ''

  const dotEnvFilePath = path.resolve (__dirname, '..', '..', '.env' + env)

  dotenv.config ({ path: dotEnvFilePath })
}

module.exports = process.env
