const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "habitflowdb",        // ✅ your DB name
  "admin",              // ✅ username
  "Password123",        // ✅ correct password
  {
    host: "habitflow-db.c1gw0co6cvbl.ap-south-1.rds.amazonaws.com",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;