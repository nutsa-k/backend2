
let request = require('supertest')
let app = require('../app')
let expect = require('chai').expect

describe('Getting courses', () => {
    it('should return the name and ids of all courses', async () => {
        const res = await request(app)
            .get('/api/courses')
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.property('data')
            .to.deep.include({id: "CS3051", name: "Web Applications"}) 
        expect(res.body).to.have.property('data')
            .to.deep.include({id: "CS3048", name: "Human-Computer Interaction"}) 
    })
})


describe('Creating products', () => 
    {it('should create correctly', async () => {
        let newProduct = {
            name: "Printer"
        }
        var res = await request(app)
            .post('/api/products')
            .send(newProduct)
        expect(res.statusCode).equals(201)
        expect(res.body).to.have.property('data').
            to.have.property('message','Created ok')
        expect(res.body).to.have.property('data').
            to.have.property('id')
        const id = res.body.data.id
        
        res = await request(app)
            .get(`/api/products/${id}`)
        expect(res.statusCode).equals(200)
        expect(res.body).
            to.have.nested.property('data.name','Printer')
    })
})