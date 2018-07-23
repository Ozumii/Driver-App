const assert = require('assert');
const request = require('supertest');
const app = require('../../app');

describe('This tests the controllers for driver',()=>{

    it('Post to /api/drivers creates a new driver',(done)=>{
        request(app)
        .post('/api/drivers')
        .send({email:'ryan@test.com'})
        .end(()=>{
            done();
        })
    })
});