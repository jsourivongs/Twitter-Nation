var crypto = require('crypto');
var jwt = require('jsonwebtoken');
const fs   = require('fs');
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

User.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

User.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

var privateKEY  = fs.readFileSync('./private.key', 'utf8');

User.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, privateKEY);
};

var User = new Schema({
  name: {
    type: String, 
    required: true
  }, 
  username: {
    type: String, 
    required: true,
    unique: true
  }, 
  hash: String;
  salt: String
});



module.exports = User;
