const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const mysql = require("mysql");
const mysql2 = require("mysql2/promise");
const bodyParser = require("body-parser");
const url = require("url");
var session = require("express-session");
const bcrypt = require("bcrypt");
const { async } = require("regenerator-runtime");
const { resolve } = require("path");
//const { reject } = require("core-js/fn/promise");
const saltRounds = 10;
const cors = require("cors");
app.use(
  session({ secret: "mySecret", resave: false, saveUninitialized: false })
);

app.use(cors());
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

app.post("/myjob", cors(), (req, res) => {
  var body = req.body;

  var sql =
    "SELECT HostName, AspName  FROM AspMt m, HostMt h WHERE AspName = ? AND SiteId = ? AND m.HostID = h.HostID";

  var params = [body.AspName, body.SiteId, body.UserId];
  connection.query(sql, params, function (err, rows, fields) {
    if (err) console.log(" 실패 \n" + err);
    else req.session.HostName = rows[0].HostName;
    req.session.AspName = rows[0].AspName;
    console.log(req.session.HostName);
    console.log(req.session.AspName);
    res.redirect(307, "/login");
  });
});

app.post("/login", cors(), (req, res) => {
  var body = req.body;
  var passSql =
    "SELECT EncPassword FROM usermt WHERE UserName=? and SiteID = ?";
  var params = [body.UserName, body.SiteId];

  const conn2 = mysql.createConnection({
    host: req.session.HostName,
    user: process.env.DBUN,
    password: process.env.DBPW,
    //database: process.env.DATABASE,
    database: req.session.AspName,
    port: process.env.MYSQLPORT,
  });
  conn2.query(passSql, params, async function (err, rows, fields) {
    if (err) console.log(" 실패 \n" + err);
    else {
      if (rows[0].EncPassword == null) {
        res.status(200).json({
          fail: "웹 회원이 아닙니다",
        });
        return;
      }
      var check = await bcrypt.compare(body.EncPassword, rows[0].EncPassword);
      if (!check) {
        res.status(200).json({
          fail: "비밀번호가 다릅니다.",
        });
        return;
      } else {
        // res.status(200).json({
        //   sucess:
        //     "로그인 성공, 접속호스트 : " +
        //     req.session.HostName +
        //     "접속 db명 : " +
        //     req.session.AspName,
        // });

        res.redirect(307, "/getacntmt");
      }
    }
  });

  //토큰생성
}); //login

app.post("/getacntmt", cors(), (req, res) => {
  var sql = "SELECT * from " + req.session.AspName + ".acntmt";
  var params = [];
  connection.query(sql, params, function (err, rows, fields) {
    if (err) console.log(" 실패 \n" + err);
    else
      res.status(200).json({
        success: rows,
      });
  });
});

app.post("/regist", async (req, res) => {
  var body = req.body;
  var sql2 =
    "INSERT INTO  usermt(SiteID, UserName, UserReal,Password, EncPassword) values (?,?,?,?,?)  ";
  var encp = null;

  async function hold() {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return;

      bcrypt.hash(body.EncPassword, salt, function (err, hash) {
        if (err) return;
        encp = hash;
        console.log(encp);
      });
    });
  }
  await hold();
  setTimeout(() => update(), 2000);

  async function update() {
    var params = [
      body.SiteID,
      body.UserName,
      body.UserReal,
      body.EncPassword,
      encp,
    ];

    const conn2 = mysql.createConnection({
      host: process.env.HOST,
      user: process.env.DBUN,
      password: process.env.DBPW,
      database: process.env.DATABASE,
      port: process.env.MYSQLPORT,
    });

    conn2.query(sql2, params, function (err, rows, fields) {
      if (err) console.log(" 실패 \n" + err);
      else {
        console.log(rows);

        res.status(200).json({
          success: rows,
        });
      }
    });
  }

  // await update();
});

app.post("/regist2", (req, res) => {
  var body = req.body;
  var encp = null;

  async function hold() {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return;

      bcrypt.hash(body.EncPassword, salt, function (err, hash) {
        if (err) return;
        encp = hash;
        console.log(encp);
      });
    });
  }

  setTimeout(() => db(), 2000);

  const db = async () => {
    await hold();

    try {
      // db connection
      let connection = await mysql2.createConnection({
        host: process.env.HOST,
        user: process.env.DBUN,
        password: process.env.DBPW,
        database: process.env.DATABASE,
        port: process.env.MYSQLPORT,
      });

      // insert data
      let data = {
        EncPassword: encp,
      };

      // insert data into example table

      await connection.query(
        // "UPDATE usermt SET EncPassword = ? WHERE SiteID = ? and UserReal = ?",
        // encp,
        // body.SiteID,
        // body.UserReal
        "UPDATE usermt SET EncPassword = '" +
          encp +
          "' WHERE SiteID = '" +
          body.SiteID +
          "' and UserName = '" +
          body.UserName +
          "'"
      );

      console.log("qqqqq");
    } catch (error) {
      console.log(error);
    }
  };

  hold();
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${process.env.PORT}`);
});
