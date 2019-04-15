/* Dependencies */
var mongoose = require('mongoose'),
    Tweet = require('../models/tweets.server.model.js')
    tweets = require('../apiTest/tweets');

/* Retreive all the tweets (in block quote form) */
exports.create = async function(req, res) {
  var trends = req.body;
  console.log("You are checking the trends array: "+ trends);
  var tweetData = await tweets.getTopTweetsByTrend(trends);
  res.status(200).json(tweetData);
};

/* Get tweets by keyword (search query) */
exports.getTweetsByQuery = async function(req, res) {
  var searchQuery = req.params.searchQuery;
  console.log("req.params.searchQuery = " + searchQuery);
  var searchResults = await tweets.getTweetsByQuery(searchQuery);
  res.status(200).json(searchResults);
};
