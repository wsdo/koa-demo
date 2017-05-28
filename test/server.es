const request = require('supertest');

import app from '../app'

describe('GET /user', function() {
  it('这是一个描述', function(done) {
    request(app listen())
      .get('/index/update')
      .expect(200)
      .end(function(err,res){
        if (res.data !=1)return done(err);
        done();
      })
      // .set('Accept', 'application/json')
      // .expect('Content-Type', /json/)
  });
});
