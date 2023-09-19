const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
	try {
		const loginData = await User.findAll({
			include: [{
				model: User,
				attributes: ['username'],
			},],
		});

		const logins = loginData.map((logs) => logs.get({
			plain: true
		}));

		res.render('homepage', {
			logs,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/login', (req, res) => {
	if (req.session.logged_in) {
		res.redirect('/dashboard');
		return;
	}

	res.render('login');
});


module.exports = router;