const express=require('express');
const bodyParser = require('body-parser');
const Route= require('./routes/main');
const mongoose=require('mongoose');
const app=express();


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/blogApi").then(()=>{
    console.log("Connected to MongoDB");
});


app.use("",Route)


 app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
 })