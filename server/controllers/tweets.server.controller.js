/* Dependencies */
var mongoose = require('mongoose'), 
    Tweet = require('../models/tweets.server.model.js')
    api = require('../apiTest/app');

/* Retreive all the tweets (in block quote form) */
exports.list = function(req, res) {
  Tweet.find({}).exec(function(err, listings) {
    if (err)
      res.status(404).send(err);
    else 
      res.status(200).json(listings);
  })
};
  