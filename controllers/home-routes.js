const router = require('express').Router();
const {Liquor, Brand} = require('../config/seeds');
router.get('/', async (req, res) => {
console.log('home-routes.js');

Liquor.findAll({
    attributes: [
        'id', 
        'name',
        'type',
        'price',  
        'brand_id',   
    ],  
    include: [  
        {
            model: Brand,
            attributes: ['name']  
        } 
    ]
})
.then(dbLiqorData => {
    const liqors = dbLiqorData.map(liqor => liqor.get({ plain: true }));    
    res.render('all', {liqors} );

});
});

module.exports = router;