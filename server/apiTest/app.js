var Twit = require('twit')
 
var T = new Twit({
  consumer_key:         '1QCqJaRuXwKDLwqTD4gcVIuBF',
  consumer_secret:      'eS6JnAKvvPxTLZZAoDLXmMu3hGVwzwzDBKGjJzMB0J8M0ciDb9',
  access_token:         '1105101464224104448-TC2who3KTZvHNKqjKTnG7foZZy9dox',
  access_token_secret:  'TRxY20EbbMTEAAvgdPuiTHlDetZcjlsikFZ8qlmxlX82C',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

// use the following link to find WOEID: http://woeid.rosselliot.co.nz/lookup/france
// United States: 23424977
// Orlando, FL: 2466256
// Chicago, IL: 2379574
// Miami, FL: 2450022

/* GET trends for a place (works for city/country) */
  // T.get('trends/place', { id: 2347564}, function(err, data, response) {
  //   trends = data[0].trends;
  //   trends.forEach(trend => {
  //       if (trend.tweet_volume != null) {
  //           console.log(trend.name + ": " + trend.tweet_volume);
  //       }
  //   });
  // })


/* GET available locations */
T.get('trends/available', { }, function(err, data, response) {
  data.forEach(element => {
    if (element.countryCode == 'US') {
      // console.log(
      //   // element.name + ", " + element.country + ": " + element.woeid
      //   element
      // );
    }
  });
})

