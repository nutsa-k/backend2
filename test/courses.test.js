
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