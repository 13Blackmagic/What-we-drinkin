const router = require('express').Router();
const {Liquor, Brand, Product} = require('../models');
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
    .then(dbLiquorData => {
        console.log(dbLiquorData)
        const liquors = dbLiquorData.map(liquor => liquor.get({ plain: true }));
        console.log(liquors)    
        res.render('all', {liquors} );

    });
});

router.get('/hello', async (req, res) => {
    console.log('home-routes.js');
    res.send('hello moto')
});    



module.exports = router;