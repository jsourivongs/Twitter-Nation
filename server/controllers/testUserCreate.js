var config = require('../config/config');
var login = require("./login");
var mongoose = require('mongoose')
mongoose.connect(config.db.uri);



// var user = {
//     name: "Julian Sourivongs",
//     username:"jsourivongs",
//     password:"baseball2"
// }

// login.create(user);

req = {
    username: "jsourivongs",
    password: "baseball2"
}
async function f() {
    var ret =login.authenticate(req);
    let promise = new Promise (
        (resolve, reject) => {
            setTimeout(() => resolve(login.authenticate(req)), 5000)
        }
    );
    let t = await promise;
    console.log("RETURNED VALUE: "+ret);
}

f();