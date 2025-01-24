const router = require('express').Router();

router.use('/api', require('./order.js'));
router.use('/api', require('./product.js'));

module.exports = router;