/* Dependencies */
var mongoose = require('mongoose'), 
    Trend = require('../models/trends.server.model.js');


/* Create a trend */
exports.create = function(req, res) {

  /* Instantiate a Trend */
  var trend = new Trend(req.body);

  /* Then save the trend */
  trend.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(trend);
    }
  });
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

