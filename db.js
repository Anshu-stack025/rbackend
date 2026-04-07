const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "anshu316",
  database: "rtbs_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = db;