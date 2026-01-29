const connectDB = require('../src/config/database')
const app = require('../src/app')

console.log('🚀 Function invoked')

connectDB()
    .then(() => console.log('✅ MongoDB connected'))
    .catch((err) => console.error('❌ MongoDB error:', err))

module.exports = app
