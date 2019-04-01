/* Dependencies */
var mongoose = require('mongoose'), 
    Tweet = require('../models/tweets.server.model.js')
    api = require('../apiTest/app');

/* Retreive the top tweet (in block quote form) for each top trend. */
exports.list = async function(req, res) {
  var topTrends = req.body;
  console.log("req.body = " + topTrends);
  var tweetData = await api.getTweets(topTrends)
  res.status(200).send(tweetData);
};
  