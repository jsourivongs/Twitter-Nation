/* Dependencies */
var trends = require('../controllers/trends.server.controller.js'),
    express = require('express'),
    router = express.Router();

// router.route('/')
//   .get(trends.list)
//   .post(trends.create);

router.route('/:stateCode')
  .post(trends.create);

module.exports = router;
