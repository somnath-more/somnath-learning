console.log("Welcome ti the freelancer project");

const express = require('express');
const dotenv=require('dotenv')
const Route = require('./routes/main');
const mongoose = require('mongoose');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const Zorro = require('./models/zorro');
const Slider = require('./models/Slider');
const Service = require('./models/Service');
const app = express();
const Gallery = require('./models/Gallery');
const port = process.env.PORT || 5555;

// Middleware

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
// Routes
app.use("",Route)
// Template 
app.set('view engine', 'hbs')
app.set('views','views'); 
// Database Configuration
// 

dotenv.config()
mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongo:27017/website_tut')
   .then(() => {
    console.log('Connected to MongoDB')

    // Gallery.create([
    //     {
    //         imageLink: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQNWgrOIZZsycp7EtuYCBaPjcjOMkPy91MBXFArUKJoI179gMB8WXQ8cZlTzIfgs_InEl1TPPSA6V_RL8VK5coU7L7NJZo8xNPX-SqZYQ",
    //         imageName: "Noida,India"
    //     },
    //     {
    //         imageLink: "https://lh5.googleusercontent.com/p/AF1QipMHvkB151icA3Pa0YFWpakcpCv_LplFa1gorz6j=w1013-h585-n-k-no",
    //         imageName: "Kolkata,India"
    //     },{
    //         imageLink: "https://assets-news.housing.com/news/wp-content/uploads/2021/07/20184714/All-about-the-Delhi-Red-Fort-or-Lal-Kila-FB-1200x700-compressed-2.jpg",
    //         imageName: "Red fort,India"
    //     },{
    //         imageLink: "https://media.architecturaldigest.com/photos/5af30475c29da93330bbfe90/16:9/w_2560%2Cc_limit/GettyImages-478627080.jpg",
    //         imageName: "Mount Everest,Nepal"
    //     },{
    //         imageLink: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJF9CWjI_saYTZjGuvCQsGcHJ2pHfpjqzJQeyJldc_hiajHU_LTXAKKLfau7y92zxrf1Cm0F2_j0S4p8unmmzxd2qam6bY4-Gdg91RHA",
    //         imageName: "Shaniwar wada,Pune"
    //     }
    // ])
    // Service.create([
    //     {
    //       "icon": "https://img.freepik.com/free-photo/view-nature-landscape-with-forest_23-2150763618.jpg?t=st=1728889477~exp=1728893077~hmac=9b2079d8ecc7da393f37d5b8d2d34ba20d5ef5122bed6ce211cb430479209941&w=1380",
    //       "title": "National Park",
    //       "description": "Explore the beauty of nature with scenic trails and wildlife.",
    //       "link1": "https://example.com/national-park",
    //       "link1Text": "Learn More",
    //       "link2": "https://example.com/book-national-park",
    //       "link2Text": "Book Now"
    //     },
    //     {
    //       "icon": "https://www.tadobanationalpark.in/images/tadoba-national-park5.jpg",
    //       "title": "Tadoba National Park",
    //       "description": "Join us for an unforgettable hiking experience in the mountains.",
    //       "link1": "https://example.com/mountain-hiking",
    //       "link1Text": "Explore Trails",
    //       "link2": "https://example.com/hiking-tours",
    //       "link2Text": "Book a Tour"
    //     },
    //     {
    //       "icon": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRXWfaemgHcFHGGMUk-TinGSARPeHsW2ugprs2WLmCFK-NkgyhyHEpuTRaLnDkMgw0klfEgJu22Kdpl-B3z47K0KjU471aHJmYB6iqU8w",
    //       "title": "Anjuna Beach,Goa",
    //       "description": "Relax on the beautiful beaches and enjoy water activities.",
    //       "link1": "https://example.com/beach-getaway",
    //       "link1Text": "Discover Beaches",
    //       "link2": "https://example.com/beach-resorts",
    //       "link2Text": "View Resorts"
    //     },
    //     {
    //       "icon": "fa fa-city",
    //       "title": "City Tours",
    //       "description": "Experience the vibrant culture and sights of the city.",
    //       "link1": "https://example.com/city-tours",
    //       "link1Text": "See Tours",
    //       "link2": "https://example.com/city-attractions",
    //       "link2Text": "Attractions"
    //     }
    //   ]
      
    //   )
    // Slider.create(
    //     [
    //         {
    //             title: "Ramanujan",
    //             subTitle: "The man who knew Infinity",
    //             imageUrl: "/webapp/static/images/ramanujan.jpg",
    //             isActive: true

    //         },
    //         {
    //             title: "Thomas Edison",
    //             subTitle: "The Electricity founder",
    //             imageUrl: "/webapp/static/images/edison.jpg",
    //             isActive: false

    //         },{
    //             title: "Albert Einstein",
    //             subTitle: "The father of modern physics and e=mc^2",
    //             imageUrl: "/webapp/static/images/einstein.jpg",
    //                isActive: false

    //         }
    //     ]
    // )

    // Zorro.create([
    //     { "label": "Home", "url": "/" },
    //     { "label": "Services", "url": "/#services_section" },
    //     { "label": "Gallery", "url": "/gallery"},
    //     { "label": "About-Us", "url": "/#about_us" },
    //     { "label": "Contact Us", "url": "/#contact_us_section" }
    //     ])
    
})
   .catch(err => console.error(err));

// Registering the partiald
const path = require('path');

hbs.registerPartials('views/partials');

// Registering static content

app.use('/webapp/static', express.static( 'public'));
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});