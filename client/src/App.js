import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Auth(LoginPage, null)} />
        {/* <Route exact path="/" Component={LoginPage} /> */}
        <Route exact path="/main" Component={Auth(LandingPage, true)} />
        <Route exact path="/register" Component={Auth(RegisterPage)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
