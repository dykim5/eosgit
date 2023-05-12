import React from "react";
//import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "antd/dist/antd.css";  //버전5부터 import 안해도 됨
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers";
import * as ReactDOMClient from "react-dom/client";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

// ReactDOM.render(
//   <Provider
//     store={createStoreWithMiddleware(
//       Reducer,
//       window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__()
//     )}
//   ></Provider>,
//   document.getElementById("root")
// );

root.render(
  <React.StrictMode>
    <Provider
      store={createStoreWithMiddleware(
        Reducer,

        window.__REDUX_DEVTOOLS_EXTENTION__ &&
          window.__REDUX_DEVTOOLS_EXTENTION__()
      )}
    >
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
