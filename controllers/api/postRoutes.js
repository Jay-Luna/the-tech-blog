const router = require('express').Router();
const { Post, Comment } = require('../../models');

// Post APIs /posts
// Get all posts & their comments
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: Comment }]
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json({ error: 'Could not find any posts & comments' });
    }
});

// Add a new post
router.post('/', async (req, res) => {
    try {
        var newPost = req.body;
        newPost.created_date = new Date();

        const postData = await Post.create(newPost);
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

module.exports = router;