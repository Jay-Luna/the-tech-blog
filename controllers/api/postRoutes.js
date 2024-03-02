const router = require('express').Router();
const { Post, Comment } = require('../../models');

// Post APIs /api/posts
// Get all posts & their comments
router.get('/', async (req, res) => {
    try {
        // find all post including its comments
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
        // add created time of the post
        newPost.created_date = new Date();

        const postData = await Post.create(newPost);
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// Add a new comment
router.post('/comments', async (req, res) => {
    try {
        var newComment = req.body;
        // add created time of the comment
        newComment.created_date = new Date();

        const commentData = await Comment.create(newComment);
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

module.exports = router;