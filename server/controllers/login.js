var mongoose = require('mongoose'), 
    User = require('../models/users');
    mongoose.Promise = require('bluebird');

exports.create = function(req) {
    var user = new User(req);
    user.save(function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("saved user\n");
        }
      });
};

exports.authenticate = async function (req) {
    username = req.username;
    password = req.password;
    User.findOne({username: username}, function(err, user) {
        if (err)
        {
          console.log(err);
          return false;
        }
        else{
            console.log(user);
            if(user.password == password) {
                console.log("password matchs\n");
                return true;
            }
            else {
                return false;
            }
        }
      });
}