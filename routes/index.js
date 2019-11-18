

var express = require('express');
var router = express.Router();

const controller = require('../controllers/products.controller')

/* GET product listing. */
router.get('/', controller.getAll)
router.get('/:productId', controller.getOne)

module.exports = router;