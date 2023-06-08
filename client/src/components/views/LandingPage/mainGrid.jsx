import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/wijmo.css";
import "./mainGrid.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";

//
import * as wjcGrid from "@grapecity/wijmo.react.grid";
class MainGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this._getData(100),
      rowCount: 0,
      cellCount: 0,
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <wjcGrid.FlexGrid initialized={this.initializeGrid.bind(this)} itemsSource={this.state.data}></wjcGrid.FlexGrid>
        <p>
          The grid now has <span id="rowCount">{this.state.rowCount}</span> rows and <span id="cellCount">{this.state.cellCount}</span> cell elements.
        </p>
      </div>
    );
  }
  _getData(cnt, start) {
    let data = [];
    let countries = "상의,하의,바지,신발,모자,목걸이".split(",");
    if (!start) start = 0;
    for (let i = 0; i < cnt; i++) {
      data.push({
        품번: i + start,
        품명: countries[i % countries.length],
        단가: Math.random() * 10000,
        수량: 0,
        금액: Math.random() * 10000,
        단가DC: i % 4 === 0,
      });
    }
    return data;
  }
  initializeGrid(flex) {
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
        let view = s.collectionView;
        let index = view.currentPosition; // keep position in case the view is sorted
        this._addData(this.state.data, 20);
        view.refresh();
        view.currentPosition = index;
      }
    });
  }
  _addData(data, cnt) {
    let more = this._getData(cnt, data.length);
    for (let i = 0; i < more.length; i++) {
      data.push(more[i]);
    }
  }
}
setTimeout(() => {
  const container = document.getElementById("mainGrid");
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<MainGrid />);
  }
}, 100);
