const express = require('express');
const router = express.Router();
const Constants = require('./constants');
router.get('/',(req, res)=>{
   return res.render('home',{data: Constants.BOOKS_DATA})
})
module.exports = router;