/* Dependencies */
var mongoose = require('mongoose'),
    Trend = require('../models/trends.server.model.js')
    trends = require('../apiTest/trends');


/* Create a trend */
exports.create = async function(req, res) {
  var stateCode = req.params.stateCode;
  console.log("req.params.stateCode = " + stateCode);
  var trendData = await trends.getTopTrendsByStateCode(stateCode)
  res.status(200).json(trendData);
};


/* Retreive all trends */
// exports.list = function(req, res) {
//   Trend.find({}).exec(function(err, trends) {
//     if (err)
//       res.status(404).send(err);
//     else
//       res.status(200).json(trends);
//   })
// };
