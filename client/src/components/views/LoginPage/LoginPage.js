import React, { useState } from "react";
//import Axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

function LoginPage(props) {
  const dispatch = useDispatch();
  const [AspName, setAspName] = useState("");
  const [SiteId, setSiteId] = useState("");
  const [UserName, setUserName] = useState("");
  const [EncPassword, setEncPassword] = useState("");

  const onAspNameHandler = (event) => {
    setAspName(event.currentTarget.value);
  };

  const onSiteIdHandler = (event) => {
    setSiteId(event.currentTarget.value);
  };

  const onUserNameHandler = (event) => {
    setUserName(event.currentTarget.value);
  };

  const onEncPasswordHandler = (event) => {
    setEncPassword(event.currentTarget.value);
  };

  const onSumbitHandler = (event) => {
    //페이지 refresh를 막아준다
    event.preventDefault();

    let body = {
      AspName: AspName,
      SiteId: SiteId,
      UserName: UserName,
      EncPassword: EncPassword,
    };

    dispatch(loginUser(body)).then((response) => {
      console.log(response);
      if (response.payload.loginSuccess) {
        alert("로그인성공");
        //props.history.push("/");
      } else {
        alert(response.payload.msg);
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSumbitHandler}
      >
        <label>계정 ID </label>
        <input type="text" value={AspName} onChange={onAspNameHandler} />

        <label> 매장번호</label>
        <input type="text" value={SiteId} onChange={onSiteIdHandler} />

        <label>사용자 ID </label>
        <input type="text" value={UserName} onChange={onUserNameHandler} />

        <label>비밀번호 </label>
        <input
          type="password"
          value={EncPassword}
          onChange={onEncPasswordHandler}
        />
        <br />
        <button>login</button>
      </form>
    </div>
  );
}

export default LoginPage;
