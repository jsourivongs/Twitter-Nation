var config = require('../config/config')
var UnitedStates = require('./UnitedStates')
var Twit = require('twit')
var T = new Twit({
  consumer_key:         config._consumer_key,
  consumer_secret:      config._consumer_secret,
  access_token:         config._access_token,
  access_token_secret:  config._access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})


/**
 * Prints all cities of a state that Twitter has trending topic information for.
 * @param {string} stateCode A state's two-letter mailing code
 */
function getCitiesByStateCode(stateCode) {
  states = UnitedStates.states;
  states.forEach(state => {
    if (state.code == stateCode)
      cities = state.cities;      
  });
  return cities;
}
/* Change the state code in the following line to get cities from a different state */
// getCitiesByStateCode('CA');


/**
 * Makes a GET request to Twitter's API to retrieve all of the trends for a location
 * specified by their 'woeid'.
 * @param {number} woeid Where On Earth IDentifier
 */
async function getTrendsByWOEID(woeid) {
  var allTrends = [];
  var trendResponse = await T.get('trends/place', {id: woeid});
  var trends = trendResponse.data[0].trends;
  trends.forEach(trend => {
    if (trend.tweet_volume != null) 
      allTrends.push(trend);
  });
  return allTrends;
}


/**
 * Creates a timed delay.
 * @param {number} ms Desired time delay (in milliseconds).
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


/**
 * Performs several procedures (adding, sorting, removing, etc.) to return 
 * a state's top five trends (may need to divide the work into several
 * smaller functions later).
 * @param {} cities Array of all trend-available cities within a single state.
 */
async function rankStateTrends(cities) {
  var statewideTrends = [];
  
  cities.forEach(async city => {
    // Get all trends from the current city
    var trends = await getTrendsByWOEID(city.woeid); 

    // Add all of the newly found trends to the overall 'statewide' array of trends
    trends.forEach(trend => {
      statewideTrends.push(trend);
    });

    // Sort the array of trends in descending order of their tweet counts
    statewideTrends.sort(function(a, b){
      return b.tweet_volume - a.tweet_volume;
    });    
  });

  // Temporary workaround to avoid returning undefined values due to asynchronous JS
  await delay(500);

  // Remove all duplicate trends in the array
  for (var i = 1; i < statewideTrends.length - 1; i++) {
    if (statewideTrends[i].name === statewideTrends[i-1].name) {
      statewideTrends.splice(i, 1);
      i -= 1; // Decrease index by 1 to cancel out the for-loop's increment 
              // (want to stay at same index in case there are more duplicates)
    }
  }

  // Finally, return the state's top 5 trends!
  return statewideTrends.slice(0, 5);
}

 
/**
 * Returns the top 5 trends for a particular state. 
 * @param {string} stateCode A state's two-letter mailing code.
 */
async function getTopTrendsByStateCode(stateCode) {
  var cities = getCitiesByStateCode(stateCode); // Get all cities for a specified state
  var topTrends = await rankStateTrends(cities);
  if (topTrends.length > 0)
    console.log(topTrends);
  else 
    console.log("No trends available for state: " + stateCode)  
}
/* Change the state code in the following line to get trends from a different state */
getTopTrendsByStateCode('GA');

