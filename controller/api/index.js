const router = require('express').Router();
const userRoutes = require('./userRoutes');
const charaterRoutes = require('./characterRoutes');

router.use('/users', userRoutes);
router.use('/characters', charaterRoutes);

module.exports = router;
