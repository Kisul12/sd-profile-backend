const mongoose = require('mongoose')

const GallerySchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    description: String
})

module.exports = mongoose.model('Gallery', GallerySchema)
