const mongoose = require('mongoose')

const Gallery = mongoose.Schema({
    imageLink: String,
    imageName: String,
})

module.exports = mongoose.model('Gallery', Gallery)