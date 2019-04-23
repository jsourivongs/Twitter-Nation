/* Dependencies */
var login = require('../controllers/login'), 
    express = require('express'), 
    router = express.Router();

router.route('/')
  .post(login.authenticate);

module.exports = router;
