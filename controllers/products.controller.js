

const model = require('../routes/products')

exports.getAll = function(req, res) { 
    let products = model.getAllProducts()
    res.statusCode = 200
    res.json({data: products});
}

exports.getOne = function(req, res) { 
    let product = model.getOneProduct(req.params.productId)
    res.statusCode = 200
    res.json({data: product});
}

