var acc = require('../controllers/login.js');
var express = require('express');
var router = express.Router();


console.log("acc router\n")
router.route('/').post(acc.create).put(acc.authenticate);


module.exports = router;