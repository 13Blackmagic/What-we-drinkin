const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize; // variable to hold connection
console.log('hello moto')
console.log(process.env.JAWSDB_URL)
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
