/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var trendSchema = new Schema({
  name: String,
  url: String,
  promoted_content: Schema.Types.Mixed,
  query: String,
  tweet_volume: Number
});

// /* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
// trendSchema.pre('save', function(next) {
//   var currentTime = new Date;
//   this.updated_at = currentTime;
//   if(!this.created_at)
//   {
//     this.created_at = currentTime;
//   }
//   next();
// });

/* Use your schema to instantiate a Mongoose model */
var Trend = mongoose.model('Trend', trendSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Trend;
