var should = require('should'), 
    request = require('supertest'), 
    express = require('../config/express');

var app, agent;

describe('Testing login routes', function() {

    this.timeout(10000);

    before(function(done) {
        app = express.init();
        agent = request.agent(app);

        done();
    });
    it('should be able to authenticate a user', function(done) {
        agent.post('/api/login')
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                done();
            });
    });
    it('should return an error code when bad request given', function(done) {
        agent.get('/api/login')
            .expect(404)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                done();
            });
    });
});
