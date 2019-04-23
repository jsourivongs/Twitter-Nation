//require crypto to hash passwords
var crypto = require('crypto');

//require mongoose to connect to db
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

//user schema model with name, username, and hash and salt for password
var userSchema = new Schema({
  name: {
    type: String, 
    required: true
  }, 
  username: {
    type: String, 
    required: true,
    unique: true
  }, 
  hash: String,
  salt: String
});

//methods for the User model
//creates the salt and hash given inputed password - uses crypto methods
 userSchema.methods.setPassword = function(password){
   this.salt = crypto.randomBytes(16).toString('hex');
   this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
 };

//Tests to see if the password is correct by encrypting
// the salt and password and seeing if output matches the stored hash
 userSchema.methods.validPassword = function(password) {
   var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
   return this.hash === hash;
 };

var User = mongoose.model('User', userSchema);

module.exports = User;
