import React from "react";
import { useDispatch } from "react-redux";
import { MenuFoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, FileOutlined, PoweroffOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button, Layout, Menu, theme, Space, Select, Input } from "antd";
import { useState } from "react";
import logo1 from "../../../img/logo1.png";
import NavBar from "../NavBar/NavBar";
import mgrid from "./app";
//import * as wijmo from "../../../scripts/vendor/controls/wijmo.min.js";
//import wijmo from "https://cdn.grapecity.com/wijmo/5.latest/controls/wijmo.min.js";

// import { ODataCollectionView } from "../../../scripts/vendor/controls/wijmo.odata.min.js";
//import { ODataCollectionView } from "../../../scripts/vendor/controls/wijmo.odata.min.js";
//import { FlexGrid } from "../../../scripts/vendor/controls/wijmo.grid.min2.js";

<script src="../../../scripts/vendor/controls/wijmo.min.js"></script>;
<script src="../../../scripts/vendor/controls/wijmo.grid.min.js"></script>;
<script src="../../../scripts/vendor/controls/cultures/wijmo.culture.ko.min.js"></script>;
//document.readyState === "complete" ? init() : (window.onload = init);

const { Header, Sider, Content } = Layout;
const { Option } = Select;

const dispatch = useDispatch;

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

              <div id="app" style={{ height: "250px" }}></div>
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
              <h2> 우 </h2>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default LandingPage;
