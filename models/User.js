const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    console.log('hello moto')
})

localStorage.setItem('username',User.email)
localStorage.setItem('password',User.password)

// create our Location model
class User extends Model {}

// create fields/columns for Location model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User'
  }
local
 
 
);

module.exports = User;
