const router = require('express').Router();
const { User } = require('../../models');

// Handles user login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: {user_name: req.body.user_name} });

        if (!userData) {
            res.status(400).json({ message: 'Incorrect username or password, please try again' });
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect username or password, please try again' });
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// Handles user logout
router.post('/logout', async (req, res) => {
    if (res.session.logged_in) {
        res.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
