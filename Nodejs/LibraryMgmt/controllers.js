const express = require('express');
const app = express();
const Constants = require('./constants');
app.use(express.json());
const restApi = express.Router();

restApi.post("/", (req, res) => {
    const inputBookName = req.body.bookName
    const inputBookAuthor = req.body.bookAuthor
    const inputBookPages = req.body.bookPages
    const inputBookPrice = req.body.bookPrice
    console.log(Constants.BOOKS_DATA);
    Constants.BOOKS_DATA.push({
        bookName: inputBookName,
        bookAuthor: inputBookAuthor,
        bookPages: inputBookPages,
        bookPrice: inputBookPrice,
        bookState: "Available"
    })

    res.render("home", {
        data: Constants.BOOKS_DATA
    })
})

restApi.post('/issue', async (req, res) => {
    const requestedBookName = req.body.bookName;
    console.log(requestedBookName);

    // Using a for...of loop to properly handle asynchronous operations
    for (const book of Constants.BOOKS_DATA) {
        if (book.bookName === requestedBookName) {
            book.bookState = "Issued";
        }
    }

    // Render the 'home' view with the updated BOOKS_DATA
    res.render("home", {
        data: Constants.BOOKS_DATA
    });
});

restApi.post('/return', (req, res) => {
    var requestedBookName = req.body.bookName;
    Constants.BOOKS_DATA.forEach(book => {
        if (book.bookName == requestedBookName) {
            book.bookState = "Available";
        }
    })
    res.render("home", {
        data: Constants.BOOKS_DATA
    })
 })
 restApi.post('/delete', (req, res) => {
    var requestedBookName = req.body.bookName;
    var j = 0;
   
    Constants.BOOKS_DATA.forEach(book => {
        j = j + 1;
        if (book.bookName == requestedBookName) {
            Constants.BOOKS_DATA.splice((j - 1), 1)
        }
    })
    res.render("home", {
        data: Constants.BOOKS_DATA
    })
    
 })
module.exports = restApi;