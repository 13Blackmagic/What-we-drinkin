const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const userRoutes = require('./userRoutes');


router.use('/', userRoutes);
router.use('/home', homeRoutes);


module.exports = router;





