import React, { useState } from "react";
//import Axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom";
import backimg from "../../../img/back.png";
import { Button, Space, Input, Form, Checkbox, DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import $ from "jquery";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";
const weekFormat = "MM/DD";
const monthFormat = "YYYY/MM";

//window.localStorage.setItem("AddHour", 24);

var AddHour = window.localStorage.getItem("AddHour") ?? 0;
var nowDate = dayjs().add(AddHour, "hour");
var isFirst = window.localStorage.getItem("isFirst");
var isFirstCeck = isFirst ?? true;

console.log(isFirstCeck);

function hide() {
  if (isFirstCeck) {
    console.log("숨기기");
    $("#hideDiv").hide();
  }
}

//debugger;

//날짜 관련
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat = (value) => `${dayjs(value).startOf("week").format(weekFormat)} ~ ${dayjs(value).endOf("week").format(weekFormat)}`;

function LoginPage() {
  const dispatch = useDispatch();
  const [AspName, setAspName] = useState("");
  const [SiteId, setSiteId] = useState("");
  const [UserName, setUserName] = useState("");
  const [EncPassword, setEncPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  // const onFinish = (evnet) => {
  //   //페이지 refresh를 막아준다
  //   event.preventDefault();

  //   let body = {
  //     AspName: AspName,
  //     SiteId: SiteId,
  //     UserName: UserName,
  //     EncPassword: EncPassword,
  //   };

  //   dispatch(loginUser(body)).then((response) => {
  //     console.log(response);
  //     if (response.payload.loginSuccess) {
  //       //alert("로그인성공");
  //       //props.history.push("/");
  //       // window.location.replace("/main");
  //       navigate("/main");
  //     } else {
  //       alert(response.payload.msg);
  //     }
  //   });
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

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

  const navigate = useNavigate();

  const onFinish = (event) => {
    //페이지 refresh를 막아준다
    //event.preventDefault();

    let body = {
      AspName: AspName,
      SiteId: SiteId,
      UserName: UserName,
      EncPassword: EncPassword,
    };

    dispatch(loginUser(body)).then((response) => {
      console.log(response);
      if (response.payload.loginSuccess) {
        //alert("로그인성공");
        //props.history.push("/");
        // window.location.replace("/main");
        navigate("/main");
      } else {
        alert(response.payload.msg);
      }
    });
  };

  return (
    <div
      id="isFirst3"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <img src={backimg} style={{ position: "absolute", width: "100%", height: "100vh" }}></img>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          bottom: "-30%",
          //background: "white",
          //border: "round",
        }}
        //onSubmit={onSumbitHandler}
      >
        {/* <Form.Item
          label="계정 ID"
          name="AspName"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="매장번호"
          name="SiteId"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="사용자 ID"
          name="UserName"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="EncPassword"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item> */}
        <label id="isFirst" name="isFirst" className="isFirst" style={{ color: "white" }}>
          {" "}
          업무일자{" "}
        </label>
        <DatePicker id="isFirst2" defaultValue={nowDate} format={dateFormat} />
        <div
          style={
            {
              //display: "flex",
              //justifyContent: "center",
              //alignItems: "center",
              //width: "100%",
              //height: "100vh",
            }
          }
          id="hideDiv"
        >
          <label style={{ color: "white" }}> 계정 ID </label>
          <Input size="small" value={AspName} onChange={onAspNameHandler} />

          <label style={{ color: "white" }}> 매장번호</label>
          <Input size="small" value={SiteId} onChange={onSiteIdHandler} />
        </div>
        <label style={{ color: "white" }}>사용자 ID </label>
        <Input size="small" value={UserName} onChange={onUserNameHandler} />

        <label style={{ color: "white" }}>비밀번호 </label>

        {/* <input type="password" value={EncPassword} onChange={onEncPasswordHandler} /> */}
        <Space direction="horizontal">
          <Input.Password value={EncPassword} onChange={onEncPasswordHandler} placeholder="비밀먼호를 입력하세요" visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }} />
          <Button style={{ width: 80 }} onClick={() => setPasswordVisible((prevState) => !prevState)}>
            {passwordVisible ? "숨기기" : "보이기"}
          </Button>
        </Space>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            //offset: 8,
            span: 16,
          }}
        >
          <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          login
        </Button>
      </Form>
    </div>
  );
}
hide();

export default LoginPage;
