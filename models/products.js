
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Product', productSchema);

// OR


var express = require('express');
var router = express.Router();

const controller = require('../controllers/products.controller')

router.get('/', controller.getAll)
router.get('/productId', controller.getOne)
router.post('/', controller.create)

module.export = router;