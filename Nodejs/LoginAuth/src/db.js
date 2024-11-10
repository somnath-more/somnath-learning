const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async()=>{
mongoose.connect('mongodb://localhost:27017/LoginAuth').then(()=> console.log('Connected to MongoDB')).catch((err) => console.log(err));
};
module.exports = connectDB;