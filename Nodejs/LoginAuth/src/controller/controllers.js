const express = require('express');
const router = express.Router();
const User = require('../models');

const passport = require('passport');
const bcrypt = require('bcrypt');


// Try to register
router.post('/register',async(req,res) => {
     console.log(req.body);
     const {username,email,password,confirmpassword} = req.body;
     if(!username ||!email ||!password ||!confirmpassword){
         return res.status(400).render("register",{error: "All fields are required"}).json({message: 'Please fill in all fields'});
     }
     
     if(password !== confirmpassword)
     {
          return res.status(400).render("register",{error: "Passwords do not match"}).json({message: 'Passwords do not match'});
     }

     try {
        const existingUser = await User.findOne({username: username});
        if(existingUser){
            return res.status(400).render("register",{error: "Username already exists"}).json({message: 'Username already exists'});
        }
        const salt = await bcrypt.genSalt(15);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({username,email,password:hashedPassword});
        await newUser.save();
        return res.redirect("/login");
        
     } catch (error) {
        return res.status(500).json({message: error.message});
     }
}); 
//  try to login
router.post('/login', async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        req.login(user, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error logging in' });
            }
            req.session.name = username;
            req.session.password = password;
            req.session.rememberMe = 'email';
            console.log(req.session.id);
            console.log(req.session);
            req.session.save((err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Error saving session' });
                }
                res.redirect('/');
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});


router.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect("/");
});

module.exports = router;

