const Product = require('../models/product')
const User = require('../models/user')
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.getAll = async function(req, res) {
    try {
      let products = await Product.find({user: new ObjectId(req.params.userId)})
      res.json({data: products})
    } catch (error) {
      res.json({error: error})
    }
}

module.exports.getOne = async function(req, res) {
  try {
    let product = await Product.findOne({user: new ObjectId(req.params.userId), _id: new ObjectId(req.params.productId)})
    res.json({data: product})
  } catch (error) {
    res.end({error: error})
  }
}

module.exports.create = async function(req, res) {
        try {
  let product = new Product(req.body)
  let newProduct = await product.save()
  res.statusCode = 201
  res.json({data: {id: newProduct._id, message: "Created ok"}})
      } catch (error) {
        console.log(error)
        res.end({error: error})
    }
}