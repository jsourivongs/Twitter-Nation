var should = require('should'),
    fd = require('fs'),
    request = require('request');

var config = require('../config/config');
var mongoose = require('mongoose')
mongoose.connect(config.db.uri);
var  User = require('../models/users');
var  model = mongoose.model('User');

var id;

describe('Testing user model', function () {
    var user = new User();
    user.name = 'Julian';
    user.username = 'juiceMan44';
    user.setPassword('safePassword');
 
    it('should be able to create a user', function(done) {
   
        user.save(function(err,user) {
            should.not.exist(err);
            id = user._id;
        });
        done();
    });
    it('should be able to find a user that exists', function(done) {
        User.findOne({username: 'admin'}, function(err, user) {
            should.not.exist(err);
            should.exist(user);
            done();
        })
    });
    it('should throw an error if name not provided', function(done) {
        new User({
            username: 'Blah',
            hash: 'hash',
            salt: 'salt'
        }).save(function(err, user) {
            should.exist(err);
            should.not.exist(user);
            done();
        });
    });
    it('should throw an error if username not provided', function(done) {
        new User({
            name: 'Blah',
            hash: 'hash',
            salt: 'salt'
        }).save(function(err, user) {
            should.exist(err);
            should.not.exist(user);
            done();
        });
    });
    afterEach(function(done) {
        if(id) {
            User.remove({ _id: id }).exec(function() {
            id = null;
            done();
            });
        } else {
            done();
        }
    });
});
