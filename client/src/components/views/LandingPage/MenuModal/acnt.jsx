import React from "react";
import { Button, Modal, DatePicker, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState, useCallback, useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import "./acntGrid.css";
import { useHotkeys } from "react-hotkeys-hook";
import dayjs from "dayjs";
import AcntGrid from "./acntGrid";
const Acnt = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("입출금 그리드 작성");

  const handleKeyPress = useCallback((event) => {
    if (event.key === "F1") {
      window.addEventListener("keydown", function (e) {
        if (e.keyCode === 112) {
          e.preventDefault();
        }
      });
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("1초뒤 사라짐");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  // var nowDate = dayjs();
  // var dateVal = nowDate.format("YYYY-MM-DD");

  // const onChange = (date, dateString) => {
  //   dateVal = dateString;
  // };

  // const onSearch = (event) => {
  //   console.log(dateVal);
  // };

  const fnCreate = () => {
    alert(1);
  };
  const fnUpdate = () => {};

  const fnDelete = () => {};

  const fnManage = () => {};

  return (
    <>
      <div onClick={showModal}>F1 입출금내역</div>

      <Modal
        title="입출금 내역"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={
          [
            // <Button key="1" onClick={fnCreate} style={{ float: "left" }}>
            //   추가(F2)
            // </Button>,
            // <Button key="2" onClick={fnUpdate} style={{ float: "left" }}>
            //   수정(F3)
            // </Button>,
            // <Button key="3" onClick={fnDelete} style={{ float: "left" }}>
            //   삭제(del)
            // </Button>,
            // <Button key="4" onClick={fnManage} style={{ float: "left" }}>
            //   계정과목관리
            // </Button>,
            // <Button key="5" onClick={handleCancel}>
            //   닫기
            // </Button>,
          ]
        }
      >
        <br></br>
        <br></br>
        {/* <div id="acntGrid"></div> */}
        <AcntGrid />
      </Modal>
    </>
  );
};

setTimeout(() => {
  const container = document.getElementById("acnt");
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<Acnt />);
    //root.render(<acntGrid />);
  }
}, 300);

//ReactDOM.render(<Acnt />, document.getElementById("acnt"));

//export default Acnt;
