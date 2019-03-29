var trendFunctions = require('./trends')
var config = require('../config/config')
var Twit = require('twit')
var T = new Twit({
  consumer_key:         config._consumer_key,
  consumer_secret:      config._consumer_secret,
  access_token:         config._access_token,
  access_token_secret:  config._access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})


async function main() {
    var topTrends = await trendFunctions.getTopTrendsByStateCode('FL');
    // console.log(topTrends);
    getTopTweetsByTrend(topTrends);
}

main();
  
async function getTopTweetsByTrend(trends) {
    try {
        var searchData = [];
        var max = 0;
        var maxA = [];
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 1");
        // console.log(trends[0]);
        for(var i = 0; i < 1; i++){
            console.log("trend name: " + trends[i].name);
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 2");
            var searchResponse = await T.get('search/tweets', {q: trends[i].query}, {result_type: 'popular'});
            // console.log(searchResponse.data);
            var len = searchResponse.data.statuses.length;
            var id;
            console.log("tweet id: " + searchResponse.data.statuses[1].id_str);
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 3");
            tweets = searchResponse.data.statuses;
            tweets.forEach(tweet => {
                console.log("tweet id: " + tweet.id_str + "\n" + "retweet count: " + tweet.retweet_count + "\n");
            })
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 4");
            for (var j = 0; j < 5; j++) {
                for(var k = 0; k < len; k++) {
                    var count = searchResponse.data.statuses[k].favorite_count;
                    if (count > max && maxA.indexOf(count) == -1){
                        id = searchResponse.data.statuses[k].id_str;
                        max = count;
                    }
                }
                searchData.push(id);
                maxA.push(max);
                console.log(max);
                max = 0;
            }
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 5");
        }
    } catch(e) {
        console.log("ERROR");
    }
}

   