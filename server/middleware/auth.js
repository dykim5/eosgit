let auth = (req, res, next) => {
  //인증 처리를 하는곳

  // 클라이언트 쿠키에서 토큰을 가져온다
  let token = req.cookies.x_auth;

  // 토큰을 복호화 한 후 usermt 테이블에 저장된 토큰과 비교

  jwt.verify(token, "secretToken", function (err, decoded) {
    //유저 아이디를 이용해서 유저를 찾은 다음 클라이언트에서 가져온 token과 db 값 비교

    var verifySql =
      "SELECT UserID, IsSuperVisor, Token, TokenExp FROM Usermt WHERE UserID = ? and Token = ?";
    var params = [decoded, token];

    console.log("미들웨어 auth 체크 시작");

    conn2.query(verifySql, params, function (err, rows, fields) {
      if (err) return res.status(400).send(err);
      else {
        if (rows[0].UserID <= 0) {
          return res.status(400).send("로그인이 만료되었습니다.");
        }
        //토큰을 쿠키에 저장한다.
        res.token = token;
        res.UserID = rows[0].UserID;
        res.IsSuperVisor = rows[0].IsSuperVisor;
        next();
      }
    });
  });
};

module.exports = { auth };
