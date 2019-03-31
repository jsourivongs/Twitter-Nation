/* Dependencies */
var mongoose = require('mongoose'), 
    Trend = require('../models/trends.server.model.js')
    var trends = require('../apiTest/trends');


/* Create a trend */
exports.create = function(req, res) {
  var code = req.body;
  console.log(req.body);
  res.status(200).send(trends.getTopTrendsByStateCode(code));
};


/* Retreive all the directory trends, sorted alphabetically by trend code */
exports.list = function(req, res) {
  /** TODO **/
  /* Your code here */
  Trend.find({}).exec(function(err, trends) {
    if (err)
      res.status(404).send(err);
    else 
      res.status(200).json(trends);
  })
};

