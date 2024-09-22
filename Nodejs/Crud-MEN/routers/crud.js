const express = require('express');
const router=express.Router();
const Course=require('../modules/crudtype');
router.get('/', async(req, res)=>{
    // res.send('Welcome to the Home Page');
    // res.end("Finished")
 


    //  I will do get call to mongodb database
    //  and fetch all records and send it to client

    try {
        const courses=await Course.find();
        res.json(courses);
    } catch (error) {
        console.log(error);
    }


});
// posting data to server
// POST request to add a new course
router.post('/', async (req, res) => {
    const { name, price, pages, author } = req.body;
    console.log(req.body);
    // Check for missing fields
    // if (!name || !price || !pages || !author) {
    //     return res.status(400).json({ message: 'All fields are required' });
    // }

    // const course = new Course({
    //      name,
    //     price,
    //     pages,
    //     author
    // });

    try {
        const newCourse = await Course.create(req.body)
        res.status(201).json(newCourse);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Get By ID
router.get('/:courseId', (req, res) => {
    const id = req.params.courseId;
    Course.findById(id)
    .then(course => {
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.json(course);
    })
});

//  Delete Course using courseId
router.delete('/:courseId', (req, res) => {
     const id =req.params.courseId;
     Course.findByIdAndDelete(id)
     .then(course => {
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.json({ message: 'Course deleted successfully' }).status(200);
    })


})

// update Course using id
// Model.findByIdAndUpdate(id, update, options, callback);
router.put('/:courseId', (req, res) => {
    const id = req.params.courseId;
    const { name, price, pages, author } = req.body;
    Course.findByIdAndUpdate(id, { name, price, pages, author }, { new: true })
   .then(course => {
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.json(course);
    })
});

// exporting router important sentence
module.exports=router