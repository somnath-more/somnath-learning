const express = require('express');
const router = express.Router();
const Zorro = require('../models/zorro');
const Slider = require('../models/Slider');
const Form = require('../models/Form');
const Service = require('../models/Service');
const Gallery = require('../models/Gallery');
// Route to get all users
// Sending a mail
var nodemailer = require('nodemailer');
router.get('/', async (req, res) => {
    // res.json({msg: 'Get all users'});
    const details = await Zorro.findOne({ "_id": "66ead8e49cdd0817bad5ee44" })
    const slides = await Slider.find();
    // servises dynamic data
    const services = await Service.find();

    res.render('index', { data: details, slides: slides, services: services });
});


router.get('/gallery', async (req, res) => {
    // res.json({msg: 'Get all users'});
    const details = await Zorro.findOne({ "_id": "66ead8e49cdd0817bad5ee44" })
    const photos = await Gallery.find();
    res.render('gallery', { data: details, photos: photos })
});
//  Service page
router.get('/service', async (req, res) => {
    // res.json({msg: 'Get all users'});
    const details = await Zorro.findOne({ "_id": "66ead8e49cdd0817bad5ee44" })
    const services = await Service.find();
    res.render('service', {
        data: details,
        // Add more fields as needed
        services: services
    })
});

// About page

router.get('/about', async (req, res) => {
    // res.json({msg: 'Get all users'});
    const details = await Zorro.findOne({ "_id": "66ead8e49cdd0817bad5ee44" })
    res.render('about', { data: details })
});
//  Cotnact Us page
router.get('/contact-us', async (req, res) => {
    // res.json({msg: 'Get all users'});
    const details = await Zorro.findOne({ "_id": "66ead8e49cdd0817bad5ee44" })
    res.render('contact', { data: details })
});
// handle foirm submitrou
router.post('/process-contact-form', async (req, res) => {
    console.log('form submitted');
    try {
        const contact = await Form.create(req.body);
        console.log(contact)
        //    
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'somnath.more19@vit.edu',
                pass: 'Somnath@2001'
            }
        });

        var mailOptions = {
            from: 'somnath.more19@vit.edu',
            to: 'somnathmore0604@gmail.com',
            subject: 'Sending Email using Node.js',
            text: req.body.query,
        };
// console.log(req.body.query);
// Sebding Email using Node.js backend , first getting data and then sending
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.redirect('/');
        res.end();
        // res.status(201).json({ message: 'Form submitted successfully' });

    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
})
module.exports = router;
