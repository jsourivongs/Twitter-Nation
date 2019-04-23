/* Dependencies */
var mongoose = require('mongoose'), 
    Trend = require('../models/trends.server.model.js')
    trends = require('../apiTest/trends');

/* List the tops trends for the chosen state. */
exports.list = async function(req, res) {
  var stateCode = req.params.stateCode;
  var trendData = await trends.getTopTrendsByStateCode(stateCode)
  res.status(200).json(trendData);
};
