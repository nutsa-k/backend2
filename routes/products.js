var express = require('express');
var router = express.Router();

const controller = require('../controllers/products.controller')

router.get('/', controller.getAll)
router.get('/:productId', controller.getOne)


module.exports = router;

exports.getAllProducts = function() { 
    return [
        {
            id: 1,
            name: "Laptop" 
        },
        {
            id: 2,
            name: "Screen" }
    ]
}

exports.getOneProduct = function(productId) { 
    switch (productId) {
        case "1":
            return {
                id: 1,
                name: "Laptop" 
            }
        case "2": return {
            id: 2,
            name: "Screen" 
        }
    }
}