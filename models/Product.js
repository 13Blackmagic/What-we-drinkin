const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Location model
class Product extends Model {}

// create fields/columns for Location model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stock: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'category',
            key: 'id'
        },      
      },
    brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'brand',
            key: 'id'
        },
    },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
  },
);

module.exports = Product;
