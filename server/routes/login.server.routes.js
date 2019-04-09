/* Dependencies */
var login = require('../controllers/login'), 
    express = require('express'), 
    router = express.Router();

// router.route('/')
//   .get(trends.list)
//   .post(trends.create);

router.route('/')
  .post(login.authenticate);






module.exports = router;