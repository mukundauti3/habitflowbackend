const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "habitflow-db.c1gw0co6cvbl.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Password123",
  database: "mysql",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = connection.promise();