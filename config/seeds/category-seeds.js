const {Category} = require('../../models');

const categoryData = [
    {
        category_name: 'Whiskey'
    },
    {
        category_name: 'Vodka'
    },
    {
        category_name: 'Rum'
    },
    {
        category_name: 'Tequila'
    },
    {
        category_name: 'Gin'
    },
    {
        category_name: 'Brandy'
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;