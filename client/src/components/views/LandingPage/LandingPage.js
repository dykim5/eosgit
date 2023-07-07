import React from "react";
import { useDispatch } from "react-redux";
import { MenuFoldOutlined, UserOutlined, FileOutlined, PoweroffOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button, Layout, Menu, theme, Space, Select, Input, Row, Col } from "antd";
import { useState, useRef, useEffect, useCallback } from "react";
import logo1 from "../../../img/logo1.png";
import emptyImg from "../../../img/emptyImg.PNG";
import NavBar from "../NavBar/NavBar";
import "./mainGrid";
import "./middleGrid.css";
import "./topGrid.css";
import $ from "jquery";
import { topData, middleData, bottomData } from "./data2";
import { getTopMenuData } from "./data";
import Acnt from "./MenuModal/acnt";
//////////////////////////// 모달

// import "./MenuModal/acnt";
// import "./MenuModal/acntGrid";
/////////////////////////////모달 끝
//import wijmo from "@grapecity/wijmo.react.grid";

{
  /* <script src="../../../scripts/vendor/controls/wijmo.min.js"></script>;
<script src="../../../scripts/vendor/controls/wijmo.grid.min.js"></script>;
<script src="../../../scripts/vendor/controls/cultures/wijmo.culture.ko.min.js"></script>; */
}

const { Header, Sider, Content } = Layout;
const { Option } = Select;

const dispatch = useDispatch;

const rightTopButtonstyle = {
  background: "#dde9f2",
  padding: "30px",
  flex: "0 0 20%",
};

const onclickHandler = () => {
  console.log("logout");
  //document.dispatchEvent(new KeyboardEvent("keydown", { key: "F1" }));

  // document.addEventListener("keydown", function (e) {
  //   const keyCode = e.keyCode;
  //   console.log("pushed key " + e.key);

  //   if (keyCode == 13) {
  //     // Enter key
  //     document.dispatchEvent(new KeyboardEvent("keydown", { key: "F1" }));
  //     // document.dispatchEvent(new KeyboardEvent('keyup', {key: 'e'}));
  //   } else if (keyCode == 9) {
  //     // Tab key
  //     document.dispatchEvent(new KeyboardEvent("keydown", { key: "t" }));
  //     // document.dispatchEvent(new KeyboardEvent('keyup', {key: 't'}));
  //   }
  // });

  axios.get("/api/users/logout").then((response) => {
    console.log(response.data);
    if (response.data.success) {
      //props.history.push("/login");
      window.location.replace("/");
    } else {
      alert("로그아웃 실패");
    }
  });
};

function LandingPage(props) {
  const childComponentRef = useRef();
  const [collapsed, setCollapsed] = useState(false);

  //bottom 메뉴의 단축키 실행
  const handleKeyPress = useCallback((event) => {
    // if (event.key === "F1") {
    //   window.addEventListener("keydown", function (e) {
    //     if (e.keyCode === 112) {
    //       e.preventDefault();
    //       childComponentRef.current.acntModalOpen();
    //     }
    //     //입출금
    //     //acntModalOpen은 acnt.jsx 에서 정의하고 부모페이지로 보낼 함수 따로 작성했음.
    //   });
    // } else if (event.key === "F2") {
    //   window.addEventListener("keydown", function (e) {
    //     if (e.keyCode === 113) {
    //       e.preventDefault();
    //       childComponentRef.current.acntModalOpen();
    //     }
    //   });
    // }

    window.addEventListener("keydown", function (e) {
      //F1일경우
      if (e.keyCode === 112) {
        e.preventDefault();
        //입출금
        //acntModalOpen은 acnt.jsx 에서 정의하고 부모페이지로 보낼 함수 따로 작성했음.
        childComponentRef.current.acntModalOpen();
      }

      //F2
      else if (e.keyCode === 113) {
        e.preventDefault();
        //상품찾기
        childComponentRef.current.acntModalOpen();
      }
    });
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  ///////////////////////////////////////////////////////     단축키 제어 끝  ///////////////////////////////////////////////////////
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  getTopMenuData();
  return (
    <>
      <NavBar></NavBar>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "도움말",
              },
              {
                key: "2",
                icon: <FileOutlined />,
                label: "용지주문",
              },
              {
                key: "3",
                icon: <FileOutlined />,
                label: "원격지원",
              },
              {
                key: "4",
                icon: <FileOutlined />,
                label: "통장관리",
              },
              {
                key: "5",
                icon: <FileOutlined />,
                label: "주문관리",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuFoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <img src={logo1} style={{ float: "left" }}></img>
            사용자 : / 업체 : | 보류 : |
            <div
              style={{
                float: "right",
              }}
            >
              <Button type="primary" icon={<PoweroffOutlined />} onClick={onclickHandler}>
                로그아웃
              </Button>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 1080,
              height: "90vh",
              background: colorBgContainer,
            }}
          >
            <div
              style={{
                float: "left",
                boxSizing: "border-box",
                width: "50%",
                //background : "darkgray"
              }}
            >
              <h2>
                {" "}
                <div className="site-space-compact-wrapper" style={{ width: "85%" }}>
                  <Space.Compact block>
                    <Select defaultValue="wholesale" allowClear>
                      <Option value="wholesale">도매</Option>
                      <Option value="retail">소매</Option>
                    </Select>
                    <Input
                      style={{
                        width: "100%",
                      }}
                      defaultValue=""
                    />
                    {/* <Select
                      allowClear
                      //mode="multiple"
                      mode="single"
                      defaultValue=""
                      style={{
                        width: "70%",
                      }}
                    >
                      <Option value="wholesale">test2</Option>
                      <Option value="retail">test3</Option>
                    </Select> */}
                  </Space.Compact>
                </div>
              </h2>

              <br />

              <div id="mainGrid" className="wj-flexgrid2"></div>
              <div style={{ margin: "7px" }}>
                <div style={{ width: "100%", fontWeight: 700, fontSize: "large", color: "blue", margin: "7px" }}>
                  <table>
                    <tr>
                      <th style={{ width: "20%" }}>판매소계 :</th>
                      <th style={{ width: "20%" }}>&nbsp;&nbsp;0</th>
                      <th style={{ width: "20%" }}>&nbsp;&nbsp;0</th>
                      <th style={{ width: "20%" }}>&nbsp;&nbsp;0</th>
                      <th style={{ width: "20%", float: "right" }}>&nbsp;&nbsp;(0)</th>
                    </tr>
                  </table>
                </div>
                <div style={{ width: "100%", fontWeight: 700, fontSize: "large", color: "red", margin: "7px" }}>
                  <table>
                    <tr>
                      <th style={{ width: "20%" }}>반품소계 :</th>
                      <th style={{ width: "20%" }}>&nbsp;&nbsp;0</th>
                      <th style={{ width: "20%" }}>&nbsp;&nbsp;0</th>
                      <th style={{ width: "20%" }}>&nbsp;&nbsp;0</th>
                      <th style={{ width: "20%", float: "right" }}>&nbsp;&nbsp;0%</th>
                    </tr>
                  </table>
                </div>
                <div>
                  <div
                    style={{
                      float: "left",
                      boxSizing: "border-box",
                      width: "58%",
                      border: "1px solid",
                      borderRadius: "8px",
                      //background: "darkgray",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "large", color: "black", height: "40px", margin: "2px" }}>
                      <div style={{ float: "left" }}>전잔 :</div>
                      <div style={{ float: "right" }}>0(0)&nbsp;&nbsp;</div>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: "large", color: "blue", height: "40px", margin: "2px" }}>
                      <div style={{ float: "left" }}>당일합계 :</div>
                      <div style={{ float: "right" }}>(0)&nbsp;&nbsp;</div>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: "large", color: "red", height: "40px", margin: "2px" }}>
                      {" "}
                      <div style={{ float: "left" }}>입금합계 :</div>
                      <div style={{ float: "right" }}>(0)&nbsp;&nbsp;</div>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: "large", color: "red", height: "40px", margin: "2px" }}>
                      {" "}
                      <div style={{ float: "left" }}>할인금액 :</div>
                      <div style={{ float: "right" }}>(0)&nbsp;&nbsp;</div>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: "large", color: "black", height: "40px", margin: "2px" }}>
                      <div style={{ float: "left" }}>당잔 :</div>
                      <div style={{ float: "right" }}>(0)&nbsp;&nbsp;</div>
                    </div>
                  </div>
                  <div
                    style={{
                      float: "right",
                      boxSizing: "border-box",
                      width: "40%",
                      height: "100%",
                      border: "1px solid",
                      margin: "3px",
                    }}
                  >
                    <img src={emptyImg} style={{ width: "100%", height: "100%" }}></img>
                  </div>
                </div>
              </div>
            </div>
            {/* ################################## 세로 템플릿 ######################################### */}
            {/* ################################## 세로 템플릿 ######################################### */}
            {/* ################################## 세로 템플릿 ######################################### */}
            {/* ################################## 세로 템플릿 ######################################### */}
            {/* ################################## 세로 템플릿 ######################################### */}
            {/* ################################## 세로 템플릿 ######################################### */}
            {/* ################################## 세로 템플릿 ######################################### */}
            {/* ################################## 세로 템플릿 ######################################### */}
            {/* ################################## 세로 템플릿 ######################################### */}

            <div
              style={{
                float: "right",
                boxSizing: "border-box",
                width: "50%",
                //height: "100vh",
              }}
            >
              <table style={{ width: "100%", backgroundColor: "#dde9f2", textAlign: "Center" }}>
                {topData.map((data, index) => (
                  <tr data-index={index}>
                    <td style={{ width: "20%", height: "70px", border: "3px groove" }}>{data.a}</td>
                    <td style={{ width: "20%", height: "70px", border: "3px groove" }}>{data.b}</td>
                    <td style={{ width: "20%", height: "70px", border: "3px groove" }}>{data.c}</td>
                    <td style={{ width: "20%", height: "70px", border: "3px groove" }}>{data.d}</td>
                    <td style={{ width: "20%", height: "70px", border: "3px groove" }}>{data.e}</td>
                  </tr>
                ))}
              </table>
              <br></br>

              <table style={{ width: "100%", backgroundColor: "white", textAlign: "Center" }}>
                {middleData.map((data, index) => (
                  <tr data-index={index}>
                    <td style={{ width: "20%", height: "70px", border: "3px groove" }}>{data.a}</td>
                    <td style={{ width: "20%", height: "70px", border: "3px groove" }}>{data.b}</td>
                    <td style={{ width: "20%", height: "70px", border: "3px groove" }}>{data.c}</td>
                    <td style={{ width: "20%", height: "70px", border: "3px groove" }}>{data.d}</td>
                    <td style={{ width: "20%", height: "70px", border: "3px groove" }}>{data.e}</td>
                  </tr>
                ))}
              </table>
              <br></br>
              {/* <table style={{ width: "100%", backgroundColor: "#f9efa7", textAlign: "Center" }}>
                {bottomData.map((data, index) => (
                  <tr data-index={index}>
                    <td style={{ width: "20%", height: "70px", border: "4px groove" }}>{data.a}</td>
                    <td style={{ width: "20%", height: "70px", border: "4px groove" }}>{data.b}</td>
                    <td style={{ width: "20%", height: "70px", border: "4px groove" }}>{data.c}</td>
                    <td style={{ width: "20%", height: "70px", border: "4px groove" }}>{data.d}</td>
                    <td style={{ width: "20%", height: "70px", border: "4px groove" }}>{data.e}</td>
                  </tr>
                ))}
              </table> */}
              {/* <div className="topGrid">
                <div className="div1 mg tg">test </div>
                <div className="div2 mg tg">test </div>
                <div className="div3 mg tg">test </div>
                <div className="div4 mg tg">test </div>
                <div className="div5 mg tg">test </div>
                <div className="div6 mg tg">test </div>
                <div className="div7 mg tg">test </div>
                <div className="div8 mg tg">test </div>
                <div className="div9 mg tg">test </div>
                <div className="div10 mg tg">test </div>
                <div className="div11 mg tg">test </div>
                <div className="div12 mg tg">test </div>
                <div className="div13 mg tg">test </div>
                <div className="div14 mg tg">test </div>
                <div className="div15 mg tg">test </div>
                <div className="div16 mg tg">test </div>
                <div className="div17 mg tg">test </div>
                <div className="div18 mg tg">test </div>
                <div className="div19 mg tg">test </div>
                <div className="div20 mg tg">test </div>
                <div className="div21 mg tg">test </div>
                <div className="div22 mg tg">test </div>
                <div className="div23 mg tg">test </div>
                <div className="div24 mg tg">test </div>
                <div className="div25 mg tg">test </div>
              </div>
              <br></br>
              <div className="middleGrid">
                <div className="div1 mg">test </div>
                <div className="div2 mg">test </div>
                <div className="div3 mg">test </div>
                <div className="div4 mg">test </div>
                <div className="div5 mg">test </div>
                <div className="div6 mg">test </div>
                <div className="div7 mg">test </div>
                <div className="div8 mg">test </div>
                <div className="div9 mg">test </div>
                <div className="div10 mg">test </div>
                <div className="div11 mg">test </div>
                <div className="div12 mg">test </div>
                <div className="div13 mg">test </div>
                <div className="div14 mg">test </div>
                <div className="div15 mg">test </div>
                <div className="div16 mg">test </div>
                <div className="div17 mg">test </div>
                <div className="div18 mg">test </div>
                <div className="div19 mg">test </div>
                <div className="div20 mg">test </div>
                <div className="div21 mg">test </div>
                <div className="div22 mg">test </div>
                <div className="div23 mg">test </div>
                <div className="div24 mg">test </div>
                <div className="div25 mg">test </div>
                <div className="div26 mg">test </div>
                <div className="div27 mg">test </div>
                <div className="div28 mg">test </div>
                <div className="div29 mg">test </div>
                <div className="div30 mg">1page </div>
              </div>
              <br></br>
              */}
              <div className="topGrid">
                <div className="div1 mg bg">
                  <Acnt ref={childComponentRef} />
                </div>
                <div className="div2 mg bg" id="itemmt">
                  F2상품찾기
                </div>
                <div className="div3 mg bg">test </div>
                <div className="div4 mg bg">test </div>
                <div className="div5 mg bg">test </div>
                <div className="div6 mg bg">test </div>
                <div className="div7 mg bg">test </div>
                <div className="div8 mg bg">test </div>
                <div className="div9 mg bg">test </div>
                <div className="div10 mg bg">test </div>
                <div className="div11 mg bg">test </div>
                <div className="div12 mg bg">test </div>
                <div className="div13 mg bg">test </div>
                <div className="div14 mg bg">test </div>
                <div className="div15 mg bg">test </div>
                <div className="div16 mg bg">test </div>
                <div className="div17 mg bg">test </div>
                <div className="div18 mg bg">test </div>
                <div className="div19 mg bg">test </div>
                <div className="div20 mg bg">test </div>
                <div className="div21 mg bg">test </div>
                <div className="div22 mg bg">test </div>
                <div className="div23 mg bg">test </div>
                <div className="div24 mg bg">test </div>
                <div className="div25 mg bg">test </div>
              </div>

              {/* <div className="container-fluid">
                <div id="theGrid"> </div>
              </div> */}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default LandingPage;
