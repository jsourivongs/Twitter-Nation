/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var tweetSchema = new Schema({
  text: String
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
// tweetSchema.pre('save', function(next) {
//   var currentTime = new Date;
//   this.updated_at = currentTime;
//   if (!this.created_at) {
//     this.created_at = currentTime;
//   }
//   next();
// });

/* Use your schema to instantiate a Mongoose model */
var Tweet = mongoose.model('Tweet', tweetSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Tweet;
