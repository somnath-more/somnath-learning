// Server.js
const express = require('express');
const passport = require('passport');
const User = require('./models.js');
const localStrategy = require('./passp.js');
const controllers = require('./controller/controllers.js');
const cookieParser = require('cookie-parser');
const connectDB= require("./db");
const ejs= require('ejs');
const bodyParser = require('body-parser');
const routes = require('./pages.js');
const session = require("express-session");


// Main Server

const app = express();
connectDB();
app.use(session({
    secret:'SOMLogin232',
    resave: false,
    saveUninitialized: false,
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(passport.initialize());

app.use(passport.session());

passport.serializeUser((user,done)=> done(null,user.id));

passport.deserializeUser((id,done)=> User.findById(id).then(user=> done(null,user)));
app.use("/api/",controllers);
app.use("/",routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));