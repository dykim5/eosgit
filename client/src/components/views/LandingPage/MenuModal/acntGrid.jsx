import * as ReactDOMClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../../../styles/wijmo.css";
import "./acntGrid.css";
//import * as React from "react";
import React, { useState, useRef, useLayoutEffect } from "react";
import * as ReactDOM from "react-dom/client";
// import { ODataCollectionView } from "@grapecity/wijmo.odata";
// import { CollectionViewNavigator } from "@grapecity/wijmo.react.input";
// import { FlexGrid } from "@grapecity/wijmo.react.grid";
import { Button, DatePicker, Space, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import dayjs from "dayjs";
//import { FlexGrid, FlexGridColumn } as wjGrid from "@grapecity/wijmo.react.grid";
import * as wjcGrid from "@grapecity/wijmo.react.grid";
import * as wjcCore from "@grapecity/wijmo";
import * as wjInput from "@grapecity/wijmo.react.input";
import * as wjGrid from "@grapecity/wijmo.grid";
import keypadimg from "../../../../img/keypad.PNG";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faListCheck, faPowerOff, faCopy } from "@fortawesome/free-solid-svg-icons";
//import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { render } from "react-thermal-printer";
import UserReceipt from "./UserReceipt";
//import TPrinter from "./testp";

var nowDate = dayjs();
var dateVal = nowDate.format("YYYY-MM-DD");

const onChange = (date, dateString) => {
  dateVal = dateString;
};

var setData = null;
var searchData = null;

//var InMny = null;
//var OutMny = null;
// var Descr = null;
// var AcntID = null;
var device;

function setup(device) {
  return device
    .open()
    .then(() => device.selectConfiguration(1))
    .then(() => device.claimInterface(0));
}

function print(data) {
  var header = "거래전표";
  var encoder = new TextEncoder();
  var encData = encoder.encode(header);

  console.log(encData);

  const arrayBuffer = new ArrayBuffer(4);
  const arr = new Uint8Array([190, 200, 179, 231]);
  const cmds = ["SIZE 48 mm,25 mm", "CLS", 'TEXT 30,10,"4",0,1,1,"HackerNoon"', 'TEXT 30,50,"2",0,1,1,"WebUSB API"', 'BARCODE 30,80,"128",70,1,0,2,2,"test"', "PRINT 1", "END"];
  const cmds2 = ["거래일자 :" + data.거래일자, "비고 : " + data.비고, "과목명 : " + data.과목명];
  device.transferOut(device.configuration.interfaces[0].alternate.endpoints.find((obj) => obj.direction === "out").endpointNumber, arr);
  device.transferOut(device.configuration.interfaces[0].alternate.endpoints.find((obj) => obj.direction === "out").endpointNumber, new Uint8Array(new TextEncoder().encode(cmds.join("\r\n"))));
  device.transferOut(device.configuration.interfaces[0].alternate.endpoints.find((obj) => obj.direction === "out").endpointNumber, new Uint8Array(new TextEncoder().encode(cmds2.join("\r\n"))));
  device.transferOut(device.configuration.interfaces[0].alternate.endpoints.find((obj) => obj.direction === "out").endpointNumber, encData);
  //device.transferOut(device.configuration.interfaces[0].alternate.endpoints.find((obj) => obj.direction === "out").endpointNumber, new Uint8Array(new TextEncoder().encode(0x0a)));
}

async function connectAndPrint(data) {
  if (!("usb" in navigator)) {
    alert("보안 열결이 되어있지 않습니다. HTTPS로 접속하여 주세요.");
    return;
  }

  if (device == null) {
    navigator.usb
      //.requestDevice({ filters: [{ vendorId: 1208 }] })
      .requestDevice({ filters: [{}] })
      .then((selectedDevice) => {
        device = selectedDevice;
        return setup(device);
      })
      .then(() => print(data))
      .catch((error) => {
        console.log(error);
      });
  } else print(data);
}

const onAdd2 = async () => {
  const div = document.getElementById("agrid");
  div.className += " wj-state-focus";
  div.className += " wj-state-focused";
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "F2" }));
};

//시리얼 포트로 프린트
const onClickPrintHandler = async () => {
  //const data = await render(UserReceipt({ orderinfo }));
  //const data = await render(UserReceipt({}));
  //const port = await navigator.serial.requestPort();

  // const port = await navigator.usb.requestDevice({ filters: [] }).then(function (device) {
  //   console.log(device);
  //   setup(device);
  // });

  // navigator.usb
  //   .requestDevice({ filters: [] })
  //   .then((devices) => {
  //     if (devices.length > 0) {
  //       device = devices[0];
  //       return setup(device);
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //const port = "USBSER000";
  // const port = new SerialPort("COM5", {
  //   baudRate: 9600,
  // });
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

class AcntGrid extends React.Component {
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
      AcntID: "",
    };
  }

  render() {
    return (
      <>
        <Space direction="horizental"></Space>
        <label style={{ color: "black" }}> 영업일자 :</label>
        <DatePicker defaultValue={nowDate} onChange={onChange} />
        <Button style={{ float: "right" }} onClick={this._search} icon={<SearchOutlined />}>
          Search
        </Button>
        <br></br>
        <br></br>
        <div className="container-fluid">
          <wjcGrid.FlexGrid id="agrid" initialized={this.initializeGrid.bind(this)} itemsSource={this.state.data} allowAddNew={true} allowDelete={true} newRowAtTo={this.state.newRowAtTop}>
            <wjcGrid.FlexGridColumn
              binding="TdID"
              header="TdID"
              autofocus
              id="fid"
              ref={(c) => {
                this.inputRef = c;
              }}
            />
            <wjcGrid.FlexGridColumn binding="거래일자" header="거래일자" isReadOnly={true} />
            {/* <wjcGrid.FlexGridColumn binding="거래시간" header="거래시간" isReadOnly={true} /> */}
            <wjcGrid.FlexGridColumn binding="과목ID" header="과목ID" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="과목명" header="과목명" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="입금금액" header="입금금액" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="출금금액" header="출금금액" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="사용자ID" header="사용자ID" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="사용자명" header="사용자명" isReadOnly={true} />
            <wjcGrid.FlexGridColumn binding="비고" header="비고" isReadOnly={true} />
            {/* <wjcGrid.FlexGridColumn binding="SiteID" header="SiteID" isReadOnly={true} /> */}
            {/* <wjcGrid.FlexGridColumn binding="isPrivat" header="isPrivat" isReadOnly={true} /> */}
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
        <Button key="5" style={{ float: "right" }}>
          <FontAwesomeIcon icon={faCopy} />
          인쇄(F10)
        </Button>
        <Button
          onClick={async () => {
            await onClickPrintHandler();
          }}
        >
          출력(시리얼)
        </Button>
        <Button onClick={connectAndPrint}>출력(usb)</Button>
        {/* <TPrinter /> */}
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
              <form style={{ margin: "5px" }} id="acntForm"></form>
              <div className="modal-body">
                <label>계정과목 : </label>
                <select onChange={this.onAcntIDChanged.bind(this)} value={this.state.AcntID}>
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
    this.setState({ InMny: 0, OutMny: 0, Descr: "", AcntID: "" });
  }

  onAdd = (flex) => {
    var reload = this;
    reload.initialzePopup();

    // const div = document.getElementById("agrid");
    // div.className += " wj-state-focus";
    // div.className += " wj-state-focused";
    // document.dispatchEvent(new KeyboardEvent("keydown", { key: "F2" }));

    // var t = document.getElementById("addBtn");
    // t.addEventListener("click", function (event) {
    //   const div = document.getElementById("agrid");
    //   div.className += " wj-state-focus";
    //   div.className += " wj-state-focused";
    //   document.dispatchEvent(new KeyboardEvent("keydown", { key: "F2" }));
    // });

    this.popup2.show(true, (sender) => {
      if (sender.dialogResult === "wj-hide-ok") {
        if (this.state.AcntID == null) {
          alert("과목명을 입력하여 주세요");
          return;
        } else {
          var data = new Object();
          data.AcntID = this.state.AcntID.split("/")[0];
          data.AcntName = this.state.AcntID.split("/")[1];
          data.InMny = this.state.InMny;
          data.OutMny = this.state.OutMny;
          data.Descr = this.state.Descr;
          axios
            .post("/api/users/insertacnttd", {
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

  onDelete = (flex) => {
    // let view = flex.collectionView;
    // this.popup.show(true, (sender) => {
    //   // delete the row
    //   if (sender.dialogResult === "wj-hide-ok") {
    //   }
    //   // return focus to the gr
    // });
  };

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

  onAcntIDChanged(evt) {
    this.setState({ AcntID: evt.target.value });
  }

  initializeGrid(flex) {
    console.log("그리드 불러옴");
    setData = this;
    // var data2 = [];
    // axios
    //   .post("/api/users/getacnttd")
    //   .then(function (response) {
    //     // 성공 핸들링
    //     for (var i = 0; i < response.data.success.length; i++) {
    //       data2.push({
    //         TdID: response.data.success[i].TdID,
    //         //SiteID: response.data.success[i].SiteID,
    //         거래일자: response.data.success[i].TdDate.substring(0, 10),
    //         거래시간: response.data.success[i].TdTime.substring(11, 19),
    //         과목ID: response.data.success[i].AcntID,
    //         과목명: response.data.success[i].AcntName,
    //         isPrivate: response.data.success[i].isPrivate,
    //         입금금액: response.data.success[i].InMny,
    //         출금금액: response.data.success[i].OutMny,
    //         사용자ID: response.data.success[i].UserID,
    //         사용자명: response.data.success[i].UserReal,
    //         비고: response.data.success[i].Descr,
    //       });
    //     }

    //     setData.setState({ data: data2 });
    //   })

    //   .catch(function (error) {
    //     // 에러 핸들링
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // 항상 실행되는 영역
    //   });

    var data2 = [];
    axios
      .post("/api/users/getacnttdSearch", {
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
            과목ID: response.data.success[i].AcntID,
            과목명: response.data.success[i].AcntName,
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

    // this.setState({
    //   rowCount: flex.rows.length,
    // });
    // this.setState({
    //   cellCount: flex.hostElement.querySelectorAll(".wj-cell").length,
    // });
    // flex.updatedView.addHandler((s) => {
    //   this.setState({
    //     rowCount: s.rows.length,
    //   });
    //   this.setState({
    //     cellCount: s.hostElement.querySelectorAll(".wj-cell").length,
    //   });
    // });

    flex.scrollPositionChanged.addHandler((s) => {
      // if we're close to the bottom, add 20 items
      if (s.viewRange.bottomRow >= s.rows.length - 1) {
        // let view = s.collectionView;
        // let index = view.currentPosition; // keep position in case the view is sorted
        // this._addData(this.state.data, 20);
        // view.refresh();
        // view.currentPosition = index;
        console.log("무한스크롤 ");
      }
    });

    //삭제 단축키
    flex.hostElement.addEventListener(
      "keydown",
      (e) => {
        let view = flex.collectionView;
        //console.log(view);
        // looking for ctrl+Delete
        //if (e.ctrlKey && e.keyCode == wjcCore.Key.Delete && view.currentItem) {
        var reload = this;
        //삭제
        if (e.keyCode === wjcCore.Key.Delete && view.currentItem) {
          // prevent the grid from getting the key
          e.preventDefault();
          // confirm row deletion
          this.popup.show(true, (sender) => {
            // delete the row
            if (sender.dialogResult === "wj-hide-ok") {
              //console.log(view.currentItem);
              axios
                .post("/api/users/deleteAcnttd", {
                  data: view.currentItem.TdID,
                })
                .then(function (response) {
                  // 성공 핸들링
                  console.log("삭제성공 ");
                  view.remove(view.currentItem);
                })
                .catch(function (error) {
                  // 에러 핸들링
                  console.log(error);
                  alert("삭제 실패");
                })
                .finally(function () {
                  // 항상 실행되는 영역
                });
            }
            // return focus to the grid
            flex.focus();
            flex.refresh();
          });
        }
        //추가
        else if (e.keyCode == wjcCore.Key.F2) {
          //else if (e.keyCode === wjcCore.Key.F2 && view.currentItem) {
          //else if (e.keyCode === 69 && view.currentItem) {
          // prevent the grid from getting the key
          e.preventDefault();
          // confirm row deletion
          reload.initialzePopup();
          this.popup2.show(true, (sender) => {
            if (sender.dialogResult === "wj-hide-ok") {
              if (this.state.AcntID == null) {
                alert("과목명을 입력하여 주세요");
                return;
              } else {
                var data = new Object();
                data.AcntID = this.state.AcntID.split("/")[0];
                data.AcntName = this.state.AcntID.split("/")[1];
                data.InMny = this.state.InMny;
                data.OutMny = this.state.OutMny;
                data.Descr = this.state.Descr;
                axios
                  .post("/api/users/insertacnttd", {
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
            // return focus to the gri
          });
        }
        //수정
        else if (e.keyCode === wjcCore.Key.F3 && view.currentItem) {
          // prevent the grid from getting the key
          e.preventDefault();

          this.setState({ InMny: view.currentItem.입금금액, OutMny: view.currentItem.출금금액, Descr: view.currentItem.비고, AcntID: view.currentItem.과목ID + "/" + view.currentItem.과목명 });
          this.popup2.show(true, (sender) => {
            // delete the row
            if (sender.dialogResult === "wj-hide-ok") {
              if (this.state.AcntID == null) {
                alert("과목명을 입력하여 주세요");
                return;
              } else {
                debugger;

                var data = new Object();
                data.TdID = view.currentItem.TdID;
                data.AcntID = this.state.AcntID.split("/")[0];
                data.AcntName = this.state.AcntID.split("/")[1];
                data.InMny = this.state.InMny;
                data.OutMny = this.state.OutMny;
                data.Descr = this.state.Descr;
                axios
                  .post("/api/users/UpdateAcnttd", {
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
            flex.focus();
          });
        }
        //출력
        else if (e.keyCode == wjcCore.Key.F10) {
          e.preventDefault();
          var data = new Object();
          //debugger;
          data.TdID = view.currentItem.TdID;
          data.거래일자 = view.currentItem.거래일자;
          data.과목명 = view.currentItem.과목명;
          data.비고 = view.currentItem.비고;
          data.사용자명 = view.currentItem.사용자명;
          axios
            .post("/api/print", {
              data,
            })
            .then(function (response) {
              // 성공 핸들링
              console.log("성공");
            })
            .catch(function (error) {
              // 에러 핸들링
              console.log(error);
            })
            .finally(function () {
              // 항상 실행되는 영역
            });
        }
        //usb출력
        //출력
        else if (e.keyCode == wjcCore.Key.F9) {
          e.preventDefault();
          var data = new Object();
          //debugger;
          data.TdID = view.currentItem.TdID;
          data.거래일자 = view.currentItem.거래일자;
          data.과목명 = view.currentItem.과목명;
          data.비고 = view.currentItem.비고;
          data.사용자명 = view.currentItem.사용자명;
          connectAndPrint(data);
        }
      },
      true
    );
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
    // AcntID = null;
  }
  _addData(data, cnt) {
    let more = this._getData(cnt, data.length);
    for (let i = 0; i < more.length; i++) {
      data.push(more[i]);
    }
  }

  //조회
  _search() {
    console.log(dateVal);
    var data2 = [];
    axios
      .post("/api/users/getacnttdSearch", {
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
            과목ID: response.data.success[i].AcntID,
            과목명: response.data.success[i].AcntName,
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

// setTimeout(() => {
//   const container = document.getElementById("acntGrid");

//   // const container = ReactDOM.render(document.getElementById("acntGrid"));
//   if (container) {
//     //const root = ReactDOM.createRoot(container);
//     //const root = ReactDOM.render(document.getElementById("acntGrid"));
//     //root.render(<AcntGrid />);
//     //ReactDOM.createRoot(container).render(<AcntGrid></AcntGrid>);
//     //ReactDOM.render(<AcntGrid />, document.getElementById("root"));
//     ReactDOM.createRoot(container).render(<AcntGrid />, document.getElementById("acntGrid"));
//   }
// }, 500);

// setTimeout(() => {
//   const container = document.getElementById("acntGrid");
//   if (container) {
//     // const root = ReactDOM.createRoot(container);
//     // root.render(<AcntGrid />);

//     // const root = ReactDOMClient.createRoot(document.getElementById("acntGrid"));
//     // root.render(<AcntGrid />);

//     const root = ReactDOMClient.createRoot(document.getElementById("acntGrid"));
//     root.render(<AcntGrid />);
//   }
// }, 1500);

export default AcntGrid;
