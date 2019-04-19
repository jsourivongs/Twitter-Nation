/* Dependencies */
var express = require('express'), 
    router = express.Router();

// router.route('/')
//   .get(trends.list)
//   .post(trends.create);

router.route('/').delete(function(req, res) {
	if (req.session.username) {
		console.log("deleting session")
		req.session.destroy(function(err) {
			if (err) {
				res.status(400).end();
				console.log(err);
			} else {
				res.status(200).end();
			}
		});
	} else {
		res.status(400).end();
	}
});






module.exports = router;