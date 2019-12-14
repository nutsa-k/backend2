const request = require('supertest')
const expect = require('chai').expect
const app = require('../app')
const Product = require('../models/product')
const User = require('../models/user')

let user = {
  _id: '3ddcfa78e38c7107015f35b6',
  name: 'User',
  password: 'pass',
  email: 'a@b.c'
}
let product1 = {
  _id: '5ddcfa78e38c7107015f35b6',
  name: "Printer",
  user: user
}
let product2 = {
  _id: '4ddcfa78e38c7107015f35b6',
  name: "Screen",
  user: user
}

describe('Products', () => {
  beforeEach(async function() {
    let u = new User(user)
    await u.save()
  });
  afterEach(async function() {
    await User.deleteOne({_id: user._id})
	});

  describe('Getting products', () => {
    beforeEach(async function() {
      let p1 = new Product(product1)
      let p2 = new Product(product2)
      await p1.save()
      await p2.save()
    });
    afterEach(async function() {
      await Product.deleteOne({_id: product1._id})
      await Product.deleteOne({_id: product2._id})
    });

    it('should return all products', async () => {
        const res = await request(app)
            .get(`/api/${user._id}/products`)
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.nested.property('data[0].name', 'Printer')
        expect(res.body).to.have.nested.property('data[1].name', 'Screen')
    })
  })

  describe('Creating products', () => {
    afterEach(async function() {
      await Product.deleteOne({_id: product1._id})
    });

      it('should create correctly and return id and message', async () => {
          var res = await request(app)
            .post(`/api/${user._id}/products`)
            .send(product1)
          expect(res.statusCode).equals(201)
          expect(res.body).to.have.property('data').to.have.property('message','Created ok')
          expect(res.body).to.have.property('data').to.have.property('id')
          const id = res.body.data.id
          res = await request(app)
            .get(`/api/${user._id}/products/${id}`)
          console.log(JSON.stringify(res.body))
          expect(res.statusCode).equals(200)
          expect(res.body).to.have.nested.property('data.name', 'Printer')
      })
  })
})
