const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const userRoutes = require('./userRoutes');

router.use('/', homeRoutes);
router.use('/auth', userRoutes);


module.exports = router;

localStorage.setItem('username',User.email)
localStorage.setItem('password',User.password)





