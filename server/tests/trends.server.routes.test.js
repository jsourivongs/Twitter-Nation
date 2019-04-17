var should = require('should'), 
    request = require('supertest'), 
    express = require('../config/express');

describe('Testing trends routes', function() {

    this.timeout(10000);

    before(function(done) {
        app = express.init();
        agent = request.agent(app);

        done();
    });
    it('should be able to get trends from a state', function(done) {
        agent.get('api/trends/FL')
            .expect(200)
            .end(function(err, res) {
                done();
            });
    });
});
