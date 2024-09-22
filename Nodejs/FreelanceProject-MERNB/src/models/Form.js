const mongoose = require('mongoose')

const Form= mongoose.Schema({
    email: String,
    phone: String,
    query: String,
})

module.exports = mongoose.model('Form', Form);