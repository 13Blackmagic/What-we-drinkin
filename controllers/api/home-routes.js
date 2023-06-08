const router = require('express').Router();
const {Liquor, Brand, Product} = require('../../models');
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

router.get('/category/id', async (req, res) => {
    console.log('home-routes.js - category get By Id');
    
        Category.findByPk(req.params.id,{
            attributes: [
                'category_id',
                'category_name' 
                         ],  
            include: [  
                {
                    model: Liquor,
                    attributes: [
                        'name',
                        'price',
                        'stock',
                        'price',
                        'type',
                        'description',
                        ]  
                } 
            ]
        })
        .then(dbCategoryData => {
            console.log(dbCategpruData)
            const liquors = dbLiquorData.map(liquor => liquor.get({ plain: true }));
            console.log(liquors)    
            res.render('all', {liquors} );
    
        });
    });
    

module.exports = router;