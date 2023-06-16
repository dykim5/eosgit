import React from "react";
import { Button, Modal } from "antd";
import { useState } from "react";
import * as ReactDOM from "react-dom/client";
import "./acntGrid.css";
const Acnt = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("입출금 그리드 작성");
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
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <div onClick={showModal}>F1 입출금내역</div>

      <Modal title="입출금 내역" open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        <div id="acntGrid" class="acntGrid" style={{ height: "550px", width: "650px" }}></div>
      </Modal>
    </>
  );
};
setTimeout(() => {
  const container = document.getElementById("acnt");
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<Acnt />);
  }
}, 100);

export default Acnt;
