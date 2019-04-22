var should = require('should'), 
    request = require('supertest'), 
    express = require('../config/express');

describe('Testing tweets routes', function() {

    this.timeout(10000);

    before(function(done) {
        app = express.init();
        agent = request.agent(app);

        done();
    });
    it('should be able to get all tweets', function(done) {
        agent.post('/api/tweets')
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                done();
            });
    });
    it('should be able to get tweets from a keyword', function(done) {
        agent.get('/api/tweets/test')
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                done();
            });
    });
    it('should return an error when wrong route given', function(done) {
        agent.post('/api/tweets/test')
            .expect(404)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                done();
            });
    });

});
