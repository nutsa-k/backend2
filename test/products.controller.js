

const model = require('../models/product')

exports.getAll = function(req, res) { 
    let products = model.getAllProducts()
    res.statusCode = 200
    res.json({data: products});
}



exports.getAll = async function(req, res) {
    let products = await Product.find()
    res.json({data: products})
}


exports.getOne = function(req, res) { 
    let product = model.getOneProduct(req.params.productId)
    res.statusCode = 200
    res.json({data: product});
}

