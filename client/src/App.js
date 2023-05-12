import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={LoginPage} />
        <Route exact path="/main" Component={LandingPage} />
        <Route exact path="/register" Component={RegisterPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
