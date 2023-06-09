import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/wijmo.css";
import "./mainGrid.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { getData } from "./data";
import { ODataCollectionView } from "@grapecity/wijmo.odata";
import { CollectionViewNavigator } from "@grapecity/wijmo.react.input";
import { FlexGrid } from "@grapecity/wijmo.react.grid";
import axios from "axios";
//
import * as wjcGrid from "@grapecity/wijmo.react.grid";
class MainGrid extends React.Component {
  //             1type
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     //data: this._getData(100),
  //     data: getData(),
  //     rowCount: 0,
  //     cellCount: 0,
  //   };
  //   console.log("end");
  // }
  // render() {
  //   return (
  //     <div className="container-fluid">
  //       <wjcGrid.FlexGrid initialized={this.initializeGrid.bind(this)} itemsSource={this.state.data}></wjcGrid.FlexGrid>
  //       <p>
  //         The grid now has <span id="rowCount">{this.state.rowCount}</span> rows and <span id="cellCount">{this.state.cellCount}</span> cell elements.
  //       </p>
  //     </div>
  //   );
  // }
  // _getData(cnt, start) {
  //   let data = [];
  //   let countries = "상의,하의,바지,신발,모자,목걸이".split(",");
  //   if (!start) start = 0;
  //   for (let i = 0; i < cnt; i++) {
  //     data.push({
  //       품번: i + start,
  //       품명: countries[i % countries.length],
  //       단가: Math.random() * 10000,
  //       수량: 0,
  //       금액: Math.random() * 10000,
  //       단가DC: i % 4 === 0,
  //     });
  //   }
  //   return data;
  // }
  // initializeGrid(flex) {
  //   this.setState({
  //     rowCount: flex.rows.length,
  //   });
  //   this.setState({
  //     cellCount: flex.hostElement.querySelectorAll(".wj-cell").length,
  //   });
  //   flex.updatedView.addHandler((s) => {
  //     this.setState({
  //       rowCount: s.rows.length,
  //     });
  //     this.setState({
  //       cellCount: s.hostElement.querySelectorAll(".wj-cell").length,
  //     });
  //   });
  //   flex.scrollPositionChanged.addHandler((s) => {
  //     // if we're close to the bottom, add 20 items
  //     if (s.viewRange.bottomRow >= s.rows.length - 1) {
  //       let view = s.collectionView;
  //       let index = view.currentPosition; // keep position in case the view is sorted
  //       this._addData(this.state.data, 20);
  //       view.refresh();
  //       view.currentPosition = index;
  //     }
  //   });
  // }
  // _addData(data, cnt) {
  //   let more = this._getData(cnt, data.length);
  //   for (let i = 0; i < more.length; i++) {
  //     data.push(more[i]);
  //   }
  // }

  ///////////////////////  2type

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: getData(),
  //   };
  // }
  // render() {
  //   return (
  //     <div className="container-fluid">
  //       <p>This grid has a max-height set to 150 pixels:</p>
  //       {/* <wjcGrid.FlexGrid itemsSource={this.state.data} style={{ maxHeight: "150px" }}></wjcGrid.FlexGrid> */}
  //       <p>And this grid is as tall as necessary to show all its content without vertical scrollbars:</p>
  //       <wjcGrid.FlexGrid itemsSource={this.state.data}></wjcGrid.FlexGrid>
  //     </div>
  //     //<div></div>
  //   );
  // }

  //////////////////// 3type

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <CollectionViewNavigator byPage={true} headerFormat="Page {currentPage:n0} of {pageCount:n0}" cv={this.state.data} />
        <FlexGrid isReadOnly={true} alternatingRowStep={0} headersVisibility="Column" itemsSource={this.state.data} initialized={this.initializeGrid.bind(this)} />
      </div>
    );
  }
  initializeGrid(flex) {
    var data2 = [];
    axios
      .get("/api/users/getacntmt2")
      .then(function (response) {
        // 성공 핸들링

        for (var i = 0; i < 5; i++) {
          data2.push({
            id: response.data.success[i].AcntID,
            country: response.data.success[i].AcntID,
            sales: response.data.success[i].AcntID,
            expenses: response.data.success[i].AcntID,
          });
          console.log(response.data.success[i]);
        }
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });

    var url = "https://services.odata.org/Northwind/Northwind.svc";
    //var url = "/api/users/getacntmt2";
    console.log("이미 그림");
    var view = new ODataCollectionView(url, "Customers", {
      pageSize: 6,
      pageOnServer: true,
      sortOnServer: true,
    });
    this.setState({
      data: view,
      //data: getData(),
      //data: data2,
    });
  }
}
setTimeout(() => {
  const container = document.getElementById("mainGrid");
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<MainGrid />);
  }
}, 100);
