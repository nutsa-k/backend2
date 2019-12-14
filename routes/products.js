  
var express = require('express');
var router = express.Router();

const controller = require('../controllers/products.controller')

router.get('/:userId/products/', controller.getAll)
router.get('/:userId/products/:productId', controller.getOne)
router.post('/:userId/products/', controller.create)

module.exports = router;