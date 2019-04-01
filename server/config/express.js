var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    accRouter = require('../routes/acc'),
    tweetsRouter = require('../routes/tweets.server.routes'),
    trendsRouter = require('../routes/trends.server.routes');

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
  
  /* Serve static files */
  app.use(express.static('client'))

  /* Use the routers for requests to the api */
  app.use('/api/accounts', accRouter);
  app.use('/api/tweets', tweetsRouter);
  app.use('/api/trends', trendsRouter);


  app.all('/login', function(req, res) {
    res.redirect('/dashboard.html');
  });

  // app.all('/*', function(req, res) {
  //   res.sendFile('/index.html');
  // });

  return app;
};
