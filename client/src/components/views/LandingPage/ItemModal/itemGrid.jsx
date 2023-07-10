import * as ReactDOMClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./itemGrid.css";
import React, { useState, useRef, useLayoutEffect } from "react";
import * as ReactDOM from "react-dom/client";
import { Button, DatePicker, Space, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import dayjs from "dayjs";
import * as wjcGrid from "@grapecity/wijmo.react.grid";
import * as wjcCore from "@grapecity/wijmo";
import * as wjInput from "@grapecity/wijmo.react.input";
import * as wjGrid from "@grapecity/wijmo.grid";
import keypadimg from "../../../../img/keypad.PNG";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FlexGridFilter } from "@grapecity/wijmo.react.grid.filter";
import * as wjGridGrouppanelModule from "@grapecity/wijmo.react.grid.grouppanel";

var nowDate = dayjs();
var dateVal = nowDate.format("YYYY-MM-DD");

const onChange = (date, dateString) => {
  dateVal = dateString;
};

var setData = null;
var pagingCnt = 0;
const onAdd2 = async () => {
  const div = document.getElementById("agrid");
  div.className += " wj-state-focus";
  div.className += " wj-state-focused";
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "F2" }));
};

//시리얼 포트로 프린트
const onClickPrintHandler = async () => {
  if (!("serial" in navigator)) {
    alert("보안 열결이 되어있지 않습니다. HTTPS로 접속하여 주세요");
    return;
  }
  const port = await navigator.serial.requestPort({});
  console.log(port);
  await port.open({ baudRate: 9600 });
  const writer = port.writable?.getWriter();
  if (writer !== null) {
    //await writer.write(data);
    await writer.releaseLock();
  }
  await port.close({ baudRate: 9600 });
};

class ItemGrid extends React.Component {
  inputRef;
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      rowCount: 0,
      cellCount: 0,
      newRowAtTop: false,
      //입출금모달 폼
      InMny: 0,
      OutMny: 0,
      Descr: "",
      ItemID: "",
      frozenColumns: 4,
      flex: null,
    };
  }

  render() {
    return (
      <>
        <Space direction="horizental"></Space>
        {/* <label style={{ color: "black" }}> 영업일자 :</label>
        <DatePicker defaultValue={nowDate} onChange={onChange} /> */}
        <Button style={{ float: "right" }} onClick={this._search} icon={<SearchOutlined />}>
          Search
        </Button>
        <br></br>
        <br></br>
        <div className="container-fluid">
          <wjGridGrouppanelModule.GroupPanel grid={this.state.flex} placeholder="그룹화 할 컬럼들을 끌어다 주세요! (그리드커스텀 개발중)"></wjGridGrouppanelModule.GroupPanel>
          <wjcGrid.FlexGrid id="agrid" initialized={this.initializeGrid.bind(this)} itemsSource={this.state.data} allowAddNew={true} allowDelete={true} frozenColumns={this.state.frozenColumns}>
            <FlexGridFilter />
            <wjcGrid.FlexGridColumn binding="품번" header="품번" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="품명" header="품명" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="칼라" header="칼라" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="수량" header="수량" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="현재고" header="현재고" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="제품원가" header="제품원가" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="도매가" header="도매가" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="입고가" header="입고가" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="비고" header="비고" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="혼용률" header="혼용률" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="휴면" header="휴면" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="EANCode" header="EANCode" isReadOnly={true} />
          </wjcGrid.FlexGrid>
        </div>
        <Button key="1" id="addBtn" onClick={this.onAdd.bind(this)}>
          <FontAwesomeIcon icon={faSquarePlus} />
          추가(F2)
        </Button>

        <Button key="2" onClick={onAdd2}>
          <FontAwesomeIcon icon={faPenToSquare} />
          수정(F3)
        </Button>
        <Button key="3" onClick={this.onDelete.bind(this)}>
          <FontAwesomeIcon icon={faTrashCan} />
          삭제(DEL)
        </Button>
        {/* <Button key="4" onClick={this.onAdd.bind(this)}>
          <FontAwesomeIcon icon={faListCheck} />
          계정과목관리
        </Button> */}
        <Button key="6" onClick={this.onCloseModal} style={{ float: "right" }}>
          {/* <FontAwesomeIcon icon={faPowerOff} /> */}
          닫기(ESC )
        </Button>
        <wjInput.Popup className="modal-content" initialized={this.initPopup.bind(this)}>
          <div className="modal-header">데이터 삭제</div>
          <div className="modal-body">해당 데이터를 삭제하시겠습니까?</div>
          <div className="modal-footer">
            <button className="btn btn-primary wj-hide-ok">네</button>
            <button className="btn btn-default wj-hide">아니오</button>
          </div>
        </wjInput.Popup>

        <wjInput.Popup className="modal-content antpop" initialized={this.initPopup2.bind(this)}>
          <div className="modal-header" style={{ height: "35px", fontWeight: "bold", fontSize: "large" }}>
            입출금
          </div>
          <div>
            <div
              style={{
                float: "left",
                width: "55%",
                height: "270px",
              }}
            >
              <form style={{ margin: "5px" }} id="itemForm"></form>
              <div className="modal-body">
                <label>계정과목 : </label>
                <select onChange={this.onItemIDChanged.bind(this)} value={this.state.ItemID}>
                  <option value=""></option>
                  <option value="1/(일반계정)">(일반계정)</option>
                  <option value="2/지계비">지게비</option>
                  <option value="3/기타">기타</option>
                  <option value="4/매점비">매점비</option>
                  <option value="5/봉투비">봉투비</option>
                  <option value="6/식대">식대</option>
                  <option value="7/화물비">화물비</option>
                  <option value="8/관리비">관리비</option>
                  <option value="9/택배비">택배비</option>
                  <option value="10/커피">커피</option>
                  <option value="11/트렌테스트10">트렌테스트10</option>
                </select>
                <br></br>
                <br></br>
                <label>입금금액 :</label>
                <input type="number" step="0.01" pattern="\d*" maxLength={14} min={1} max={99999999999999} onChange={this.onInMnyChanged.bind(this)} value={this.state.InMny} />
                <br></br>
                <br></br>
                <label>출금금액 :</label>
                <input type="number" step="0.01" onChange={this.onOutMnyChanged.bind(this)} value={this.state.OutMny} />
                <br></br>
                <br></br>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;비 고 : </label>
                <input type="text" maxLength={10} onChange={this.onDescrChanged.bind(this)} value={this.state.Descr} />
              </div>
            </div>
            <div
              style={{
                float: "right",
                width: "45%",
                height: "250px",
              }}
            >
              <img src={keypadimg}></img>
            </div>
          </div>
          <div className="modal-footer" style={{ float: "right" }}>
            <button className="btn btn-primary wj-hide-ok">확인(F10)</button>
            <button className="btn btn-default wj-hide">취소(ESC)</button>
          </div>
        </wjInput.Popup>
      </>
    );
  }

  onCloseModal = (e) => {
    //var than = this;
    //than.props.mocan();
    this.props.mocan();
  };

  initialzePopup() {
    console.log("초기화");
    this.setState({ InMny: 0, OutMny: 0, Descr: "", ItemID: "" });
  }

  onAdd = (flex) => {
    var reload = this;
    reload.initialzePopup();

    this.popup2.show(true, (sender) => {
      if (sender.dialogResult === "wj-hide-ok") {
        if (this.state.ItemID == null) {
          alert("과목명을 입력하여 주세요");
          return;
        } else {
          var data = new Object();
          data.ItemID = this.state.ItemID.split("/")[0];
          data.ItemName = this.state.ItemID.split("/")[1];
          data.InMny = this.state.InMny;
          data.OutMny = this.state.OutMny;
          data.Descr = this.state.Descr;
          axios
            .post("/api/users/insertitemtd", {
              data,
            })
            .then(function (response) {
              // 성공 핸들링
              reload._search();
            })
            .catch(function (error) {
              // 에러 핸들링
              console.log(error);
            })
            .finally(function () {
              // 항상 실행되는 영역
            });
        }
      }
      // return focus to the gr
    });
  };

  onDelete = (flex) => {};

  onInMnyChanged(evt) {
    this.setState({ InMny: evt.target.value });
    //debugger;

    //this.state.testval = evt.target;
  }
  onOutMnyChanged(evt) {
    //debugger;
    this.setState({ OutMny: evt.target.value });
    //OutMny = evt.target;
  }
  onDescrChanged(evt) {
    this.setState({ Descr: evt.target.value });
  }

  onItemIDChanged(evt) {
    this.setState({ ItemID: evt.target.value });
  }

  initializeGrid(flex) {
    this.setState({
      flex: flex,
    });
    console.log("그리드 불러옴");
    setData = this;

    var data2 = [];
    axios
      .post("/api/item/getItemSearch", {
        dateVal: dateVal,
      })
      .then(function (response) {
        // 성공 핸들링
        for (var i = 0; i < response.data.success.length; i++) {
          data2.push({
            품번: response.data.success[i].ItemCode,
            품명: response.data.success[i].ItemName,
            칼라: response.data.success[i].ColorName,
            수랑: response.data.success[i].BaseQty1,
            현재고: response.data.success[i].BaseQty2,
            제품원가: response.data.success[i].PrimePrice,
            도매가: response.data.success[i].RetailPrice,
            입고가: response.data.success[i].WholePrice,
            비고: response.data.success[i].Descr,
            혼용률: response.data.success[i].Fiber,
            휴면: response.data.success[i].IsSleep1 === 0,
            EANCode: response.data.success[i].EANCode,
          });
        }
        setData.setState({ data: data2 });
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });

    flex.scrollPositionChanged.addHandler((s) => {
      if (s.viewRange.bottomRow >= s.rows.length - 1) {
        pagingCnt++;
        let view = s.collectionView;
        let index = view.currentPosition;
        this._addData(this.state.data, pagingCnt);
        view.refresh();
        view.currentPosition = index;
      }
    });
  }

  initPopup(popup) {
    this.popup = popup;
  }

  initPopup2(popup2) {
    this.popup2 = popup2;
    // console.log("초기화");
    // InMny = null;
    // OutMny = null;
    // Descr = null;
    // ItemID = null;
  }
  _addData(data, cnt) {
    axios
      .post("/api/item/getItemSearchMore", {
        page: cnt,
      })
      .then(function (response) {
        // 성공 핸들링
        for (var i = 0; i < response.data.success.length; i++) {
          data.push({
            품번: response.data.success[i].ItemCode,
            품명: response.data.success[i].ItemName,
            칼라: response.data.success[i].ColorName,
            수랑: response.data.success[i].BaseQty1,
            현재고: response.data.success[i].BaseQty2,
            제품원가: response.data.success[i].PrimePrice,
            도매가: response.data.success[i].RetailPrice,
            입고가: response.data.success[i].WholePrice,
            비고: response.data.success[i].Descr,
            혼용률: response.data.success[i].Fiber,
            휴면: response.data.success[i].IsSleep1 === 0,
            EANCode: response.data.success[i].EANCode,
          });
        }
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
  }

  //조회
  _search() {
    console.log(dateVal);
    var data2 = [];
    axios
      .post("/api/users/getitemtdSearch", {
        dateVal: dateVal,
      })
      .then(function (response) {
        // 성공 핸들링
        for (var i = 0; i < response.data.success.length; i++) {
          data2.push({
            TdID: response.data.success[i].TdID,
            SiteID: response.data.success[i].SiteID,
            거래일자: response.data.success[i].TdDate.substring(0, 10),
            거래시간: response.data.success[i].TdTime.substring(11, 19),
            과목ID: response.data.success[i].ItemID,
            과목명: response.data.success[i].ItemName,
            isPrivate: response.data.success[i].isPrivate,
            입금금액: response.data.success[i].InMny,
            출금금액: response.data.success[i].OutMny,
            사용자ID: response.data.success[i].UserID,
            사용자명: response.data.success[i].UserReal,
            비고: response.data.success[i].Descr,
          });
        }
        setData.setState({ data: data2 });
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
  }
}

export default ItemGrid;
