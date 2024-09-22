const mongodb = require('mongoose'); //
const Service = mongodb.Schema({
    icon: String,
    title: String,
    description: String,
    link1: String,
    link1Text: String,
    link2: String, // Available, Sold, etc.
    link2Text: String,
  
    // Add more fields as needed
})

module.exports = mongodb.model('Service', Service); // Export the schema for use in other parts of the application.