const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('newsletter', 'root', 'welcome', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  }
});


module.exports = sequelize;