const router = require('express').Router();
const { Post, Comment } = require('../../models');

// Get all posts & their comments
router.get('/', async (req, res) => {
    try {

        const postData = await Post.findAll({
            include: [
                {
                    model: Comment
                }
            ]
        });
        res.json(postData);
    } catch (err) {
        res.status(500).json({ error: 'Could not find any posts & comments' });
    }
});

module.exports = router;