
// models/index.js will read all model files in this folder and will associated 
// the sequelizer connection element inside teh files. This module will be exported 
// and will contain the SQLZ and sequelizer objects

'use strict'

// const herokuKeys = require('../keys.js');
// console.log('hKeys',herokuKeys)

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)

console.log('process.env.NODE_ENV', process.env.NODE_ENV)
console.log('process.env.JAWSDB_URL', process.env.JAWSDB_URL)

const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env]
let db = {}

console.log('env',env)
console.log("config",config)
console.log("process.env[config.use_env_variable]",process.env[config.use_env_variable])

// Connection string
const sequelize = config.use_env_variable ? new Sequelize(process.env[config.use_env_variable], config) 
         : new Sequelize(config.database, config.username, config.password, config)
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

// Add the function "associate" into the model to 
// establish any releationship between tables
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db