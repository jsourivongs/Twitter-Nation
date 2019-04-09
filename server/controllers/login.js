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
    // console.log(username);
    var result = false;
    console.log(req.body.password)
    User.findOne({username: req.body.username}, function(err, user) {

        if (err)
        {
          //console.log(err);
          return false;
        }
        else if(user){   
           if(user.validPassword(req.body.password)){
                //console.log("Sucessful Login!\n");
                console.log(user);
                result = true;
             }
            else{
                console.log("Incorrect Password.\n")
                result = false;
            }
        }
         else {
                console.log("Incorrect Username\n");
                result = false;
        }
      });
      console.log("login returning " + result);
      return result;
    };

// exports.authenticate =  function (req) {
//     username = req.body.username;
//     var result = false;
//     //console.log(req.body.password)
//     User.findOne({username: username}, function(err, user) {

//         if (err)
//         {
//             console.log(err);
//             return false;
//         }
//         else if(user){   
//             if(user.validPassword(req.body.password)){
//                 console.log("Sucessful Login!\n");
//                 console.log(user);
//                 result = true;
//                 }
//             else{
//                 console.log("Incorrect Password.\n")
//                 result = false;
//             }
//         }
//             else {
//                 console.log("Incorrect Username\n");
//                 result = false;
//         }
//         });
//         return result;
//     };
