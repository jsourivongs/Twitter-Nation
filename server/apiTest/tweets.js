var trendFunctions = require('./trends')
var config = require('../config/config')
var Twit = require('twit')
var T = new Twit({
  consumer_key: config._consumer_key,
  consumer_secret: config._consumer_secret,
  access_token: config._access_token,
  access_token_secret: config._access_token_secret,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
})

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getTopTweetsByTrend(trends) {
  try {
    var searchData = [];
    var max = 0;
    var maxA = [];
    for (var i = 0; i < 1; i++) {
      var searchResponse = await T.get('search/tweets', {q: trends[i].query}, {result_type: 'popular'});
      var len = searchResponse.data.statuses.length;
      var id;
      for (var j = 0; j < 5; j++) {
        for (var k = 0; k < len; k++) {
          try {
            var count = searchResponse.data.statuses[k].retweeted_status.favorite_count;
            if (count > max && maxA.indexOf(count) == -1) {
              id = searchResponse.data.statuses[k].id_str;
              max = count;
            }
          } catch (e) {}
        }
        searchData.push(id);
        maxA.push(max);
        // console.log(maxA);
        max = 0;
      }
    }
    return getEmbedBlock(searchData);
  } catch (e) {
    console.log("ERROR");
  }
}

async function getEmbedBlock(searchData) {
  var top5 = [];
  for (var i = 0; i < 5; i++) {
    var embedResponse = await T.get('statuses/oembed', { url: "https://twitter.com/CEN3031/status/" + searchData[i]});
    if (embedResponse.data.html != undefined) {
      top5.push(embedResponse.data.html);
    }
  }
  return top5;
}

module.exports = {
  getTopTweetsByTrend: async function (trends) {
    try {
      var searchData = [];
      var max = 0;
      var maxA = [];
      for (var i = 0; i < 5; i++) {
        var searchResponse = await T.get('search/tweets', {q: trends[i]}, {lang: 'en'}, {result_type: 'popular'});
        var len = searchResponse.data.statuses.length;
        var id;
        // console.log(searchResponse.data.statuses);
        for (var j = 0; j < 1; j++) {
          for (var k = 0; k < len; k++) {
            try {
              var count = searchResponse.data.statuses[k].retweeted_status.favorite_count;
              if (count > max && maxA.indexOf(count) == -1) {
                id = searchResponse.data.statuses[k].id_str;
                max = count;
              }
            } catch (e) {}
          }
          searchData.push(id);
          maxA.push(max);
          max = 0;
        }
      }
      return getEmbedBlock(searchData);
    } catch (e) {
      console.log("ERROR", e);
    }
  },
  getTweetsByQuery: async function (searchQuery) {
    try {
      var searchData = [];
      var max = 0;
      var maxA = [];
      var searchResponse = await T.get('search/tweets', {q: searchQuery}, {lang: 'en'}, {result_type: 'popular'} );
      var len = searchResponse.data.statuses.length;
      var id;
      for (var j = 0; j < 5; j++) {
        for (var k = 0; k < len; k++) {
          try {
            var count = searchResponse.data.statuses[k].retweeted_status.favorite_count;
            if (count > max && maxA.indexOf(count) == -1) {
              id = searchResponse.data.statuses[k].id_str;
              max = count;
            }
          } catch (e) {
            // console.log("error");
          }
        }
        searchData.push(id);
        maxA.push(max);
        max = 0;
      }

      // Retrieve desired Tweet attributes from API calls
      retweetCount = searchResponse.data.statuses[0].retweet_count;
      favoriteCount = searchResponse.data.statuses[0].favorite_count;
      followersCount = searchResponse.data.statuses[0].user.followers_count;
      blockQuoteArray = await getEmbedBlock(searchData);
      blockQuote0 = blockQuoteArray[0];

      // Create Tweet object with the retrieved data above
      var TweetObject = {
        retweet_count: retweetCount,
        favorite_count: retweetCount,
        followers_count: followersCount,
        block_quote: blockQuote0
      };

      return TweetObject;
    } catch(e) {}
  }
}