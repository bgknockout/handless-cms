// Dependencies
import { Sequelize } from 'sequelize'

// Utils
import { hasKey } from 'fogg-utils'

// Configuration
import { $db } from '../../config'

// Interfaces
import { iModels } from '../interfaces'

// Db Connection
const { dialect = 'postgres', port, host, database, username, password } = $db

const uri = `${dialect}://${username}:${password}@${host}:${port}/${database}`
const sequelize = new Sequelize(uri)

// Models
const models: iModels = {
  App: require('./App').default(sequelize, Sequelize),
  User: require('./User').default(sequelize, Sequelize),
  sequelize
}

Object.keys(models).forEach((modelName: string) => {
  hasKey(models, modelName) &&
    models[modelName].associate &&
    models[modelName].associate(models)
})

export default models
