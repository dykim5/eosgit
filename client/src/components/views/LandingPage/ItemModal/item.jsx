import React from "react";
import { Button, Modal, DatePicker, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState, useCallback, useEffect, useImperativeHandle, forwardRef } from "react";
import * as ReactDOM from "react-dom/client";
import "./itemGrid.css";
import { useHotkeys } from "react-hotkeys-hook";
import dayjs from "dayjs";
import ItemGrid from "./itemGrid";

const Item = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    // 부모 컴포넌트에서 사용할 함수를 선언
    itemModalOpen,
  }));

  function itemModalOpen() {
    setOpen(true);
  }

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("상품 그리드 작성");

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

  function mocan() {
    setOpen(false);
  }

  return (
    <>
      <div onClick={showModal}>F2 상품자료</div>
      <Modal title="상품자료" open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel} footer={[]}>
        <br></br>
        <br></br>
        {/* <div id="itemGrid"></div> */}
        <ItemGrid mocan={handleCancel} />
      </Modal>
    </>
  );
});

setTimeout(() => {
  const container = document.getElementById("item");
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<Item />);
  }
}, 300);

export default Item;
