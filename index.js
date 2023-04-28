const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const url = require("url");
var session = require("express-session");
app.use(
  session({ secret: "mySecret", resave: false, saveUninitialized: false })
);

//application/urlencoded
app.use(express.urlencoded({ extended: true }));

//application/json
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.MYJOBHOST,
  user: process.env.MYJOBDBUN,
  password: process.env.MYJOBDBPW,
  database: process.env.MYJOBDATABASE,
  port: process.env.MYSQLPORT,
});

app.get("/", (req, res) => res.send("eos8"));

app.post("/myjob", (req, res) => {
  var body = req.body;

  var sql =
    "SELECT HostName FROM aspmt m, hostmt h WHERE ASPNAME = ? AND siteid = ? AND m.HostID = h.HostID";

  var params = [body.aspname, body.siteid, body.userid];
  connection.query(sql, params, function (err, rows, fields) {
    if (err) console.log(" 실패 \n" + err);
    else body.hostname = rows[0].HostName;
    console.log("1번" + rows[0].HostName);
    console.log("2번" + req.body.hostname);
    console.log(req.body);
    //var hostname = rows[0].HostName;
    req.params.message = rows[0].HostName;
    req.session.hostname = rows[0].HostName;
    //res.send({ hostname: rows[0].HostName });
    //req.sesseion.hostname = "123";
    res.redirect(307, "/login");
    console.log(req.body);
  });
});

app.post("/login", (req, res) => {
  var body = req.body;
  var sql2 = "SELECT UserReal FROM usermt WHERE UserID=? and SiteID = ?";
  var params = [body.userid, body.siteid];
  const {
    body: { userid, siteid, aspname, hostname },
  } = req;
  console.log("3번" + userid, siteid, aspname, hostname);
  console.log(req.body);
  var msg = req.session.message;
  console.log("123" + msg);
  console.log(req.session.hostname);

  const conn2 = mysql.createConnection({
    host: req.session.hostname,
    user: process.env.DBUN,
    password: process.env.DBPW,
    database: process.env.DATABASE,
    port: process.env.MYSQLPORT,
  });
  conn2.query(sql2, params, function (err, rows, fields) {
    if (err) console.log(" 실패 \n" + err);
    else console.log(rows);
    res.status(200).json({
      success: rows,
    });
  });
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${process.env.PORT}`);
});
