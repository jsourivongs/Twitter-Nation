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

exports.authenticate =  function (req, res) {
    var result = false;
    User.findOne({username: req.body.username}, function(err, user) {
        if (err)
        {
          console.log(err);
          result = false;
        }
        else if(user){   
           if(user.validPassword(req.body.password)){
                req.session.username = req.body.username;
                result = true;
             }
            else{
                result = false;
            }
        }
         else {
                result = false;
        }
      }).then(function() {
          res.json(result);
          return result;
      });
    };
