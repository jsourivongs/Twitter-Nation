var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);

  //initialize app
  var app = express();
  app.set('view engine', 'html');
  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware
  app.use(bodyParser.json());
  
  /**TODO
  Serve static files */
  app.use(express.static('client'))

  /**TODO
  Use the listings router for requests to the api */
  app.use('/api/listings', listingsRouter);


  app.all('/login', function(req, res) {
    res.redirect('/login.html');
  });

  app.all('/*', function(req, res) {
    res.sendFile('/login.html');
  });

  return app;
};
