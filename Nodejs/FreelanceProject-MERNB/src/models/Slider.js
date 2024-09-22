const mongoose = require('mongoose');

const Slider= mongoose.Schema({
    title: String,
    subTitle: String,
    imageUrl: String,
    isActive: Boolean,
})

module.exports = mongoose.model('Slider', Slider);