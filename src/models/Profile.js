const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    history: String,
    vision: String,
    mission: String
})

module.exports = mongoose.model('Profile', ProfileSchema)
