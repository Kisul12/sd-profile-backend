const connectDB = require('../src/config/database')
const app = require('../src/app')

connectDB()

module.exports = app