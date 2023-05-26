const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const mysql = require("mysql");
const mysql2 = require("mysql2/promise");
const bodyParser = require("body-parser");
const url = require("url");
var session = require("express-session");
const bcrypt = require("bcrypt");
const { async } = require("regenerator-runtime");
const { resolve } = require("path");
const { auth } = require("./middleware/auth");
//const { reject } = require("core-js/fn/promise");
const saltRounds = 10;
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
//import jwt from "jsonwebtoken";

app.use(
  session({
    secret: "mySecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cors());
//application/urlencoded
app.use(express.urlencoded({ extended: true }));

//application/json
app.use(express.json());
app.use(cookieParser());
//app.use(auth);

const connection = mysql.createConnection({
  host: process.env.MYJOBHOST,
  user: process.env.MYJOBDBUN,
  password: process.env.MYJOBDBPW,
  database: process.env.MYJOBDATABASE,
  port: process.env.MYSQLPORT,
});

var con2Host = null;
var con2DB = null;

app.get("/", (req, res) => res.send("eos8"));

app.post("/api/users/myjob", cors(), (req, res) => {
  var body = req.body;

  var sql = "SELECT HostName, AspName  FROM AspMt m, HostMt h WHERE AspName = ? AND SiteId = ? AND m.HostID = h.HostID";

  var params = [body.AspName, body.SiteId, body.UserId];
  connection.query(sql, params, function (err, rows, fields) {
    if (err) console.log(" 실패 \n" + err);
    else req.session.HostName = rows[0].HostName;
    req.session.AspName = rows[0].AspName;
    console.log(req.session.HostName);
    console.log(req.session.AspName);
    res.redirect(307, "/api/users/login");
  });
});

app.post("/api/users/login", cors(), (req, res) => {
  var body = req.body;
  var passSql = "SELECT EncPassword , UserID FROM usermt WHERE UserName=? and SiteID = ?";
  var params = [body.UserName, body.SiteId];

  con2Host = req.session.HostName;
  con2DB = req.session.AspName;
  console.log("호스트명" + con2Host);
  console.log(con2DB);

  const conn2 = mysql.createConnection({
    host: con2Host,
    user: process.env.DBUN,
    password: process.env.DBPW,
    //database: process.env.DATABASE,
    database: con2DB,
    port: process.env.MYSQLPORT,
  });

  conn2.query(passSql, params, async function (err, rows, fields) {
    if (err) console.log(" 실패 \n" + err);
    else {
      var UserID = rows[0].UserID;
      req.session.UserID = UserID;
      if (rows[0].EncPassword == null) {
        res.status(200).json({
          loginSuccess: false,
          msg: "웹 회원이 아닙니다",
        });
        return;
      }

      //비밀번호 비교
      var check = await bcrypt.compare(body.EncPassword, rows[0].EncPassword);
      if (!check) {
        res.status(200).json({
          loginSuccess: false,
          msg: "비밀번호가 다릅니다.",
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

        //비밀번호가 맞다면 토큰 생성

        var token = jwt.sign(UserID, "secretToken");

        var tokenSql = "UPDATE " + req.session.AspName + ".Usermt Set Token='" + token + "'WHERE UserID ='" + UserID + "'";
        console.log(token);
        conn2.query(tokenSql, params, function (err, rows, fields) {
          if (err) return res.status(400).send(err);
          else {
            //토큰을 쿠키에 저장한다.
            res.cookie("x_auth", token).status(200).json({
              loginSuccess: true,
              UserID: UserID,
            });
            //res.redirect(307, "/getacntmt");
            console.log("auth 체크");
            //res.redirect("/api/users/auth");
            console.log("red");
          }
        });
      }
    }
  });
}); //login

app.get("/api/users/logout", cors(), (req, res) => {
  //유저 찾아서 db에서 토큰 지워주기
  console.log(req.session);
  var deleteSql = "UPDATE " + req.session.AspName + ".Usermt Set Token='' WHERE UserID ='" + req.session.UserID + "'";
  var params = [];

  console.log("파라미터" + deleteSql);

  const conn2 = mysql.createConnection({
    host: con2Host,
    user: process.env.DBUN,
    password: process.env.DBPW,
    //database: process.env.DATABASE,
    database: con2DB,
    port: process.env.MYSQLPORT,
  });

  conn2.query(deleteSql, params, function (err, rows, fields) {
    if (err) console.log(" 실패 \n" + err);
    else
      res.status(200).json({
        success: true,
      });
  });
}); //logout

app.get("/api/users/auth", auth, (req, res) => {
  //여기 까지 밀드웨어를 통과했다는것은 true 라는 말
  res.status(200).json({
    UserID: req.UserID,
    isSuperVisor: req.IsSuperVisor,
    isAuth: true,
  });
});

app.post("/api/users/getacntmt", cors(), (req, res) => {
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

app.get("/api/hello", cors(), (req, res) => {
  res.send("gd");
});

////////////////////////////////////////////////////////////////////////////////

app.post("/api/users/regist", async (req, res) => {
  var body = req.body;
  var sql2 = "INSERT INTO  usermt(SiteID, UserName, UserReal,Password, EncPassword) values (?,?,?,?,?)  ";
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
    var params = [body.SiteID, body.UserName, body.UserReal, body.EncPassword, encp];

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

app.post("/api/users/regist2", (req, res) => {
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
        "UPDATE usermt SET EncPassword = '" + encp + "' WHERE SiteID = '" + body.SiteID + "' and UserName = '" + body.UserName + "'"
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
