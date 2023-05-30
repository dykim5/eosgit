import React from "react";
import $ from "jquery";

var isFirst = window.localStorage.getItem("isFirst");
var isFirstCeck = isFirst ?? true;

console.log(isFirstCeck);

function hide() {
  if (isFirstCeck) {
    console.log("숨기기");
    //$("#isFirst3").hide();
    $("#isFirst3").css("display", "none");
  }

  $("#isFirst3").css("display", "none");
}

function LoginPage() {
  return (
    <div
      id="isFirst3"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      테스트
    </div>
  );
}
hide();

export default LoginPage;
