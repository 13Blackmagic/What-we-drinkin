const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Category = require('./Category');

// create our Location model
class Liquor extends Model {}

// create fields/columns for Location model
Category.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true
    // }
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Category'
  },
);

module.exports = Category;
