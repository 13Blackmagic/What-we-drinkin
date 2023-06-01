const Brand = require('../../models/Brand');
const Liquor = require('../../models/Liquor');
// Add other tables here, along with file in models,and in schema,

Brand.hasMany(Liquor, { foreignKey: 'brand_id'
});

Liquor.belongsTo(Brand, { foreignKey: 'brand_id'
});

module.exports = { Liquor, Brand };
