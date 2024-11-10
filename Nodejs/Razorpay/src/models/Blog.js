const mongoose = require('mongoose');
const blogSchema = {
    title: String,
    content: String,
 }
 
 module.exports= mongoose.model("Blog", blogSchema);