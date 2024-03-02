const router = require('express').Router();
const { User } = require('../../models');

// Post APIs /api/users
// Add a new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        // save session info of user created
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// Verify user login 
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        //if user is not found via email, throw 400 bad request error
        if (!userData) {
            res.status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        //if user is found via email, throw 400 bad request error if password is incorrect
        if (!validPassword) {
            res.status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // user is found, save user session
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({ user: userData, message: 'User is logged in!' });
        });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// user log out
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        // remove user session
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        // if user is already logged out, then session is not found
        res.status(404).end();
    }
});

module.exports = router;