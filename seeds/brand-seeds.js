const {Brand} = require('../models');

const brandData = [
    {
        name: 'jameson1'
    },
    {
        name: 'jameson2'

    },
    {
        name: 'jameson3'

    },
    {
        name: 'jameson4'

    },
    {
        name: 'jameson5'

    },
    {
        name: 'jameson6'

    },
];

const seedBrands = () => Brand.bulkCreate(brandData);

module.exports = seedBrands;