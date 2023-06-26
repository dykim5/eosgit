import "bootstrap/dist/css/bootstrap.min.css";
//import "../../../styles/wijmo.css";
import "./acntGrid.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ODataCollectionView } from "@grapecity/wijmo.odata";
import { CollectionViewNavigator } from "@grapecity/wijmo.react.input";
import { FlexGrid } from "@grapecity/wijmo.react.grid";
import { Button, Modal, DatePicker, Space, Dropdown } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import dayjs from "dayjs";
import * as wjcGrid from "@grapecity/wijmo.react.grid";
import * as wjcCore from "@grapecity/wijmo";
import * as wjInput from "@grapecity/wijmo.react.input";
import "./acnt";

var nowDate = dayjs();
var dateVal = nowDate.format("YYYY-MM-DD");

const onChange = (date, dateString) => {
  dateVal = dateString;
};

const onCancel = () => {
  //document.dispatchEvent(new KeyboardEvent("keydown", { key: "27" }));
};

var setData = null;
var searchData = null;

class AcntGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //data: this._getData(100),
      //data: getData(),
      data: null,
      rowCount: 0,
      cellCount: 0,
    };
    console.log("end");
  }

  render() {
    return (
      <>
        <Space direction="horizental"></Space>
        <label style={{ color: "black" }}> 영업일자 : </label>
        <DatePicker defaultValue={nowDate} onChange={onChange} />
        <Button style={{ float: "right" }} onClick={this._search} icon={<SearchOutlined />}>
          Search
        </Button>
        <br></br>
        <br></br>
        <div className="container-fluid">
          <wjcGrid.FlexGrid initialized={this.initializeGrid.bind(this)} itemsSource={this.state.data}></wjcGrid.FlexGrid>
          <p>{/* 총 <span id="rowCount">{this.state.rowCount}</span> 건이 조회되었고 and <span id="cellCount">{this.state.cellCount}</span> cell elements. */}</p>
        </div>
        <br></br>
        <br></br>
        <Button key="5" onClick={onCancel}>
          추가
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
          <div className="modal-header">입출금</div>
          <div className="modal-body">
            <label>계정과목 : </label>
            {/* <Dropdown
              menu={{
                items,
              }}
              placement=""
            >
              <Button></Button>
            </Dropdown> */}
            <select name="acntID" id="acntID">
              <option value="1">(일반계정)</option>
              <option value="2">지계비</option>
              <option value="3">기타</option>
              <option value="4">매점비</option>
              <option value="5">봉투비</option>
              <option value="6">식대</option>
              <option value="7">화물비</option>
              <option value="8">관리비</option>
              <option value="9">택배비</option>
              <option value="10">커피</option>
              <option value="11">트렌테스트10</option>
            </select>
            <br></br>
            <label>입금금액 :</label>
            <input type="text"></input>
            <br></br>
            <label>출금금액 :</label>
            <input type="text"></input>
            <br></br>
            <label>비 고 : </label>
            <input type="text"></input>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary wj-hide-ok">확인</button>
            <button className="btn btn-default wj-hide">취소</button>
          </div>
        </wjInput.Popup>
      </>
    );
  }

  initializeGrid(flex) {
    console.log("그리드 불러옴");
    setTimeout(() => {
      setData = this;
      var data2 = [];
      axios
        .post("/api/users/getacnttd")
        .then(function (response) {
          // 성공 핸들링
          for (var i = 0; i < response.data.success.length; i++) {
            data2.push({
              TdID: response.data.success[i].TdID,
              SiteID: response.data.success[i].SiteID,
              TdDate: response.data.success[i].TdDate.substring(0, 10),
              TdTime: response.data.success[i].TdTime.substring(11, 19),
              AcntID: response.data.success[i].AcntID,
              AcntName: response.data.success[i].AcntName,
              isPrivate: response.data.success[i].isPrivate,
              Inmny: response.data.success[i].Inmny,
              OutMny: response.data.success[i].OutMny,
              UserID: response.data.success[i].UserID,
              UserReal: response.data.success[i].UserReal,
              Descr: response.data.success[i].Descr,
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

      this.setState({
        rowCount: flex.rows.length,
      });
      this.setState({
        cellCount: flex.hostElement.querySelectorAll(".wj-cell").length,
      });
      flex.updatedView.addHandler((s) => {
        this.setState({
          rowCount: s.rows.length,
        });
        this.setState({
          cellCount: s.hostElement.querySelectorAll(".wj-cell").length,
        });
      });

      flex.scrollPositionChanged.addHandler((s) => {
        // if we're close to the bottom, add 20 items
        if (s.viewRange.bottomRow >= s.rows.length - 1) {
          // let view = s.collectionView;
          // let index = view.currentPosition; // keep position in case the view is sorted
          // this._addData(this.state.data, 20);
          // view.refresh();
          // view.currentPosition = index;
          console.log("무한스크롤");
        }
      });

      //삭제 단축키
      flex.hostElement.addEventListener(
        "keydown",
        (e) => {
          let view = flex.collectionView;
          // looking for ctrl+Delete
          //if (e.ctrlKey && e.keyCode == wjcCore.Key.Delete && view.currentItem) {
          if (e.keyCode == wjcCore.Key.Delete && view.currentItem) {
            // prevent the grid from getting the key
            e.preventDefault();
            // confirm row deletion
            this.popup2.show(true, (sender) => {
              // delete the row
              if (sender.dialogResult == "wj-hide-ok") {
                view.remove(view.currentItem);
              }
              // return focus to the grid
              flex.focus();
            });
          }
        },
        true
      );
    }, 1000);
  }

  initPopup(popup) {
    this.popup = popup;
  }

  initPopup2(popup2) {
    this.popup2 = popup2;
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
            TdDate: response.data.success[i].TdDate.substring(0, 10),
            TdTime: response.data.success[i].TdTime.substring(11, 19),
            AcntID: response.data.success[i].AcntID,
            AcntName: response.data.success[i].AcntName,
            isPrivate: response.data.success[i].isPrivate,
            Inmny: response.data.success[i].Inmny,
            OutMny: response.data.success[i].OutMny,
            UserID: response.data.success[i].UserID,
            UserReal: response.data.success[i].UserReal,
            Descr: response.data.success[i].Descr,
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

setTimeout(() => {
  const container = document.getElementById("acntGrid");
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<AcntGrid />);
  }
}, 500);

export default AcntGrid;
