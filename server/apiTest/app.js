// var Twit = require('twit')

// var T = new Twit({
//   consumer_key:         '1QCqJaRuXwKDLwqTD4gcVIuBF',
//   consumer_secret:      'eS6JnAKvvPxTLZZAoDLXmMu3hGVwzwzDBKGjJzMB0J8M0ciDb9',
//   access_token:         '1105101464224104448-TC2who3KTZvHNKqjKTnG7foZZy9dox',
//   access_token_secret:  'TRxY20EbbMTEAAvgdPuiTHlDetZcjlsikFZ8qlmxlX82C',
//   timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
//   strictSSL:            true,     // optional - requires SSL certificates to be valid.
// })

// /* Get trends for a place (works for city/country). */
//   // T.get('trends/place', { id: 2347564}, function(err, data, response) {
//   //   trends = data[0].trends;
//   //   trends.forEach(trend => {
//   //       if (trend.tweet_volume != null) {
//   //           console.log(trend.name + ": " + trend.tweet_volume);
//   //       }
//   //   });
//   // })


// /* Gets available trend locations (cities) within the US. */
// T.get('trends/available', { }, function(err, data, response) {
//   data.forEach(element => {
//     if (element.countryCode == 'US') {
//       console.log(element.name + ", " + element.country + ": " + element.woeid);
//     }
//   });
// })

var trends = require('./trends');
var tweets = require('./tweets');


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// async function getTrends(){
//   var res = await trends.getTopTrendsByStateCode('GA');
//   //console.log(res);
//   return res;
// }

async function getTweets(){
  var tt = await trends.getTopTrendsByStateCode('GA');
  var res = await tweets.getTopTweetsByTrend(tt);
  // console.log(res);
  return res;
}

// module.exports = {
//   getTweets : async function() {
//     var tt = await trends.getTopTrendsByStateCode('GA');
//     var res = await tweets.getTopTweetsByTrend(tt);
//     return res;
//   }
// }

var test = getTweets();
test.then(function(response) {
  // console.log("text");
  console.log(response[0]); 
})
