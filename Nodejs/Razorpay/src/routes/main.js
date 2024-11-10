const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
router.get('/blogs', async (req, res) => {
    try {
        const data = await Blog.find(); // Await the promise
        console.log(data);
        res.send(data); // Send data after it's retrieved
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving blogs');
    }
});


 router.get('/blogs/:blogTitle', (req, res) => {
    Blog.find({ title: req.params.blogTitle }, (err, blog) => {
        if (err) {
            res.send(err);
        } else {
            res.send(blog);
        }
    })
 })


 router.post('/blogs', async (req, res) => {
    const { title, content } = req.body; // Destructure the title and content from req.body

    const blog = new Blog({
        title,
        content
    });

    try {
        const savedBlog = await blog.save(); // Save the blog to the database
        res.status(201).send(savedBlog); // Send back the saved blog as a response
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving blog post'); // Handle any errors
    }
});

router.delete('/blogs', async (req, res) => {
    const { title } = req.body; // Destructure title from req.body

    try {
        const result = await Blog.deleteOne({ title: title }); // Wait for the delete operation
        if (result.deletedCount === 0) {
            return res.status(404).send('Blog not found'); // Handle case where no blog was deleted
        }
        res.status(200).send('Blog deleted!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting blog'); // Handle errors
    }
});
module.exports = router;