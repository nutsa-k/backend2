
exports.getAll = function(req, res) {
    let products = await Product.find(function(products, error) {
        if (error) {
            res.send({error: error})
        }
    res.json({data: products})
    })
}


// OR we can have try which will send an error if it fails

exports.getAll = async function(req, res) {
   try {
        let productsPromise = await Product.find() 
        res.json({data: products})
    } catch (error) {
        res.json({error: error})
    }
}