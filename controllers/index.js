const router = require('express').Router();
const pageRoutes = require('./pageRoutes');
const apiRoutes = require('./api/index');

router.use('/', pageRoutes);
router.use('/api', apiRoutes);

module.exports = router;