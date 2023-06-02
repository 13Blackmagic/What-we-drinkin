// const Brand = require('../../models/Brand');
// const Liquor = require('../../models/Liquor');
// // Add other tables here, along with file in models,and in schema,

// Brand.hasMany(Liquor, { foreignKey: 'brand_id'
// });

// Liquor.belongsTo(Brand, { foreignKey: 'brand_id'
// });

// module.exports = { Liquor, Brand };

const seedsCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');

const sequelize = require('../connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedsCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');


    process.exit(0);
};

seedAll();