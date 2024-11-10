const express= require('express');
const router = require('./routers');
// const path = require('path');
const app = express();
const controllers = require('./controllers');
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Mock data
// setup engine

app.set('view engine', 'ejs');
app.set('views', 'views');

// console.log(__dirname);
// Routes
app.use('',router);
app.use('', controllers)
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
