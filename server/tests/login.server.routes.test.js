var should = require('should'), 
    request = require('supertest'), 
    express = require('../config/express');

describe('Testing login routes', function() {

    this.timeout(10000);

    before(function(done) {
        app = express.init();
        agent = request.agent(app);

        done();
    });
    it('should be able to authenticate a user', function(done) {
        agent.get('api/login')
            .expect(200)
            .end(function(err, res) {
                done();
            });
    });
});
