/* Dependencies */
var tweets = require('../controllers/tweets.server.controller.js'),
    express = require('express'),
    router = express.Router();

/* Route requests to the correct request handler */
router.route('/').post(tweets.create);
router.route('/:searchQuery').get(tweets.getTweetsByQuery);

module.exports = router;
