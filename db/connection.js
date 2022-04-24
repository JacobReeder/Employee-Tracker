const mysql = require('mysql2');
require('dotenv').config();

// Connect to database

const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Tstsb9horror!',
      database: 'tracker'
    },
    console.log('Connected to the tracker database.')

  );

  module.exports = db;

  // create connection to our db
/*const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;*/