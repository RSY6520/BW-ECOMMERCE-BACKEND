const getAll = require('./getAll');

const router = require('express').Router();

router.get('/products', getAll);


module.exports = router;