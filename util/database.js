const Sequelize = require('sequelize');

const sequelize = new Sequelize("resultManagement","anjalis2001","@TanuRashi2003",{
    dialect: "mysql",
    host: "myserver1.mysql.database.azure.com"
});

module.exports = sequelize;