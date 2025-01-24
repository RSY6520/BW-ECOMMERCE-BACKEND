const create = require('./create');
const delOrder = require('./delete');
const getAll = require('./getAll');
const getById = require('./getById');
const update = require('./update');

const router = require('express').Router();

router.post('/order', create);
router.get('/orders', getAll);
router.get('/order/:id', getById);
router.put('/order/:id', update);
router.delete('/order/:id', delOrder);


module.exports = router;