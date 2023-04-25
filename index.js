const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DBUN,
  password: process.env.DBPW,
  database: process.env.DATABASE,
  port: process.env.MYSQLPORT,
});

connection.connect();

connection.query("SELECT * from usermt", (error, rows, fields) => {
  if (error) throw error;
  console.log("User info is: ", rows);
});

connection.end();

app.get("/", (req, res) => res.send("eos8"));

app.listen(port, () => {
  console.log(`server is listening at localhost:${process.env.PORT}`);
  //console.log("server is listening at localhost:" + port);
});
