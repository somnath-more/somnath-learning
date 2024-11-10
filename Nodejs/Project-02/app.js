console.log("Hello world!");
console.log(" Learning about nodemon");

const http = require('http');
//  const email sender 
const mailer = require('nodemailer')
// Bacend 
const tranport = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'somnath.more19@vit.edu',
        pass: 'Somnath@2001'
    }
});
let message = {
    from: 'somnath.more19@vit.edu',
    to: 'somnathmore0604@gmail.com',
    subject: 'Nodemon Testing',
    text: 'This is a test message from Nodemon'
}

tranport.sendMail(message, function(error, info) {
    if (error) {
        console.log(error);
    
    } else {
        console.log('Email sent:'+ info.response);

    }
});
