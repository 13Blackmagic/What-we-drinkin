const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Location model
class Liquor extends Model {}

// create fields/columns for Location model
Liquor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      volume: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'brand',
            key: 'id'
        }
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'liquor'
  }
);

module.exports = Liquor;
