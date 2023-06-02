// import models
const Brand = require('./Brand');
const Category = require('./Category');
const Liquor = require('./Liquor');
const Product = require('./Product');

// Products belongsTo Category

// Brand.hasMany(Liquor, { foreignKey: 'brand_id'
// });

// Category.hasMany(Liquor, { foreignKey: 'brand_id'
// });

// Liquor.belongsTo(Brand, { foreignKey: 'brand_id'
// });

// Product.hasMany(Review)(Brand, { foreignKey: 'brand_id'
// });

// Brand.hasMany(Liquor, {
//     foreignKey: 'brand_id'
// });
// Liquor.belongsTo(Brand, {
//     foreignKey: 'brand_id'
// });
// Category.hasMany(Liquor, {
//     foreignKey: 'category_id'
// });
// Liquor.belongsTo(Category, {
//     foreignKey: 'category_id'
// });
// Product.hasMany(Liquor, {
//     foreignKey: 'product_id'
// });

module.exports = {
  Brand,
  Category,
  Liquor,
  Product,
};
