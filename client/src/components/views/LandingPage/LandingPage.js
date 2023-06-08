import React from "react";
import { useDispatch } from "react-redux";
import { MenuFoldOutlined, UserOutlined, FileOutlined, PoweroffOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button, Layout, Menu, theme, Space, Select, Input, Row, Col } from "antd";
import { useState } from "react";
import logo1 from "../../../img/logo1.png";
import NavBar from "../NavBar/NavBar";
import mgrid from "./mainGrid";
import "./middleGrid.css";
import "./topGrid.css";

<script src="../../../scripts/vendor/controls/wijmo.min.js"></script>;
<script src="../../../scripts/vendor/controls/wijmo.grid.min.js"></script>;
<script src="../../../scripts/vendor/controls/cultures/wijmo.culture.ko.min.js"></script>;

const { Header, Sider, Content } = Layout;
const { Option } = Select;

const dispatch = useDispatch;

const rightTopButtonstyle = {
  background: "#dde9f2",
  padding: "30px",
  flex: "0 0 20%",
};

const onclickHandler = () => {
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
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
                //height: "100vh",
              }}
            >
              <h2>
                {" "}
                <div className="site-space-compact-wrapper">
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

              <div id="mainGrid" style={{ height: "450px" }}></div>
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
              {/* <Row gutter={[1, 1]} style={{ flex: " 0 0 20%" }}>
                <Col className="gutter-row" span={5}>
                  <div style={rightTopButtonstyle}>test</div>
                </Col>
                <Col className="gutter-row" span={5}>
                  <div style={rightTopButtonstyle}>test</div>
                </Col>
                <Col className="gutter-row" span={5}>
                  <div style={rightTopButtonstyle}>test</div>
                </Col>
                <Col className="gutter-row" span={5}>
                  <div style={rightTopButtonstyle}>test</div>
                </Col>
                <Col className="gutter-row" span={5}>
                  <div style={rightTopButtonstyle}>test</div>
                </Col>
                <Col className="gutter-row" span={5}>
                  <div style={rightTopButtonstyle}>test</div>
                </Col>
                <Col className="gutter-row" span={5}>
                  <div style={rightTopButtonstyle}>test</div>
                </Col>
                <Col className="gutter-row" span={5}>
                  <div style={rightTopButtonstyle}>test</div>
                </Col>
                <Col className="gutter-row" span={5}>
                  <div style={rightTopButtonstyle}>test</div>
                </Col>
                <Col className="gutter-row" span={5}>
                  <div style={rightTopButtonstyle}>test</div>
                </Col>
                <Col className="gutter-row" span={5}>
                  <div style={rightTopButtonstyle}>test</div>
                </Col>
                <Col className="gutter-row" span={5}>
                  <div style={rightTopButtonstyle}>test</div>
                </Col>
                <Col className="gutter-row" span={5}>
                  <div style={rightTopButtonstyle}>test</div>
                </Col>
                <Col className="gutter-row" span={5}>
                  <div style={rightTopButtonstyle}>test</div>
                </Col>
                <Col className="gutter-row" span={5}>
                  <div style={rightTopButtonstyle}>1page</div>
                </Col>
              </Row> */}
              <div class="topGrid">
                <div class="div1 mg tg">test </div>
                <div class="div2 mg tg">test </div>
                <div class="div3 mg tg">test </div>
                <div class="div4 mg tg">test </div>
                <div class="div5 mg tg">test </div>
                <div class="div6 mg tg">test </div>
                <div class="div7 mg tg">test </div>
                <div class="div8 mg tg">test </div>
                <div class="div9 mg tg">test </div>
                <div class="div10 mg tg">test </div>
                <div class="div11 mg tg">test </div>
                <div class="div12 mg tg">test </div>
                <div class="div13 mg tg">test </div>
                <div class="div14 mg tg">test </div>
                <div class="div15 mg tg">test </div>
                <div class="div16 mg tg">test </div>
                <div class="div17 mg tg">test </div>
                <div class="div18 mg tg">test </div>
                <div class="div19 mg tg">test </div>
                <div class="div20 mg tg">test </div>
                <div class="div21 mg tg">test </div>
                <div class="div22 mg tg">test </div>
                <div class="div23 mg tg">test </div>
                <div class="div24 mg tg">test </div>
                <div class="div25 mg tg">test </div>
              </div>
              <br></br>
              <div class="middleGrid">
                <div class="div1 mg">test </div>
                <div class="div2 mg">test </div>
                <div class="div3 mg">test </div>
                <div class="div4 mg">test </div>
                <div class="div5 mg">test </div>
                <div class="div6 mg">test </div>
                <div class="div7 mg">test </div>
                <div class="div8 mg">test </div>
                <div class="div9 mg">test </div>
                <div class="div10 mg">test </div>
                <div class="div11 mg">test </div>
                <div class="div12 mg">test </div>
                <div class="div13 mg">test </div>
                <div class="div14 mg">test </div>
                <div class="div15 mg">test </div>
                <div class="div16 mg">test </div>
                <div class="div17 mg">test </div>
                <div class="div18 mg">test </div>
                <div class="div19 mg">test </div>
                <div class="div20 mg">test </div>
                <div class="div21 mg">test </div>
                <div class="div22 mg">test </div>
                <div class="div23 mg">test </div>
                <div class="div24 mg">test </div>
                <div class="div25 mg">test </div>
                <div class="div26 mg">test </div>
                <div class="div27 mg">test </div>
                <div class="div28 mg">test </div>
                <div class="div29 mg">test </div>
                <div class="div30 mg">1page </div>
              </div>
              <br></br>
              <div class="topGrid">
                <div class="div1 mg bg">test </div>
                <div class="div2 mg bg">test </div>
                <div class="div3 mg bg">test </div>
                <div class="div4 mg bg">test </div>
                <div class="div5 mg bg">test </div>
                <div class="div6 mg bg">test </div>
                <div class="div7 mg bg">test </div>
                <div class="div8 mg bg">test </div>
                <div class="div9 mg bg">test </div>
                <div class="div10 mg bg">test </div>
                <div class="div11 mg bg">test </div>
                <div class="div12 mg bg">test </div>
                <div class="div13 mg bg">test </div>
                <div class="div14 mg bg">test </div>
                <div class="div15 mg bg">test </div>
                <div class="div16 mg bg">test </div>
                <div class="div17 mg bg">test </div>
                <div class="div18 mg bg">test </div>
                <div class="div19 mg bg">test </div>
                <div class="div20 mg bg">test </div>
                <div class="div21 mg bg">test </div>
                <div class="div22 mg bg">test </div>
                <div class="div23 mg bg">test </div>
                <div class="div24 mg bg">test </div>
                <div class="div25 mg bg">test </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default LandingPage;
