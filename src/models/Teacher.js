const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
    name: String,
    nip: String,
    subject: String,
    photoUrl: String
})

module.exports = mongoose.model('Teacher', TeacherSchema)