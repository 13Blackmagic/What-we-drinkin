const router = require('express').Router();

const homeRoutes = require('./api/home-routes.js');
const userRoutes = require('./api/userRoutes.js');

router.use('/', userRoutes);
router.use('/home', homeRoutes);


module.exports = router;

// localStorage.setItem('username',User.email)
// localStorage.setItem('password',User.password)





