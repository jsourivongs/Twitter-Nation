/* Dependencies */
var trends = require('../controllers/trends.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/:stateCode')
  .get(trends.list);

module.exports = router;
