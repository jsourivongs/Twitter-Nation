var mongoose = require('mongoose');
var  User = require('../models/users');
var  model = mongoose.model('User');

exports.create = function(req) {
    var user = new User();
    console.log(req.body.name)
    user.name = req.body.name;
    user.username = req.body.username;
    user.setPassword(req.body.password);

    user.save(function(err) {
        if(err) {
            console.log(err);
            console.log("error on user save\n")
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
            
            if(user.validPassword(password)) {
                console.log("password matchs\n");
                console.log(user);
                return true;
            }
            else {
                console.log("failure\n");
                return false;
            }
        }
      });
}