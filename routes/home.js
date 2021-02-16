const router = require('express').Router();

router.get('', (req, res) => {
	res.render('index', {
			users: "result"
	});
});

module.exports = router;