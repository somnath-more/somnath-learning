console.log("Creating Crud project using node , express and  mongodb");
const express=require("express") 
const routes=require("./routers/crud");
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const mongoose=require("mongoose")

mongoose.connect(process.env.DB_CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})

const db=mongoose.connection

db.on('error',(error)=>console.error("Something went wrong in database connection"))

db.once('open',()=>console.log('Connected to MongoDB'))

const app=express()
// Body parser middleware (should be before the routes)
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/courses",routes)

app.listen((3000),()=>{
    console.log("Server is Running on port:3000")
})