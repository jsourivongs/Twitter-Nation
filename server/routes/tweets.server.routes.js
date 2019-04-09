/* Dependencies */
var tweets = require('../controllers/tweets.server.controller.js'),
    express = require('express'),
    router = express.Router();

/* Route requests to the correct request handler */
router.route('/').post(tweets.create);

module.exports = router;
