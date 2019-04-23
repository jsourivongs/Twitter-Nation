var log = require('../controllers/login.js');
var express = require('express');
var router = express.Router();

console.log("log router\n")
router.route('/').post(log.create).put(log.authenticate);

module.exports = router;
