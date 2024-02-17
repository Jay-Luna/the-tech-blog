const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');

    // if (req.session.logged_in) {
        // res.render('home', {
        //     logged_in: req.session.logged_in
        // });
    // } else {
        // res.render('login');
    // }
});

module.exports = router;