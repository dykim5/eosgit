import axios from "axios";

export function getData() {
  var data = [];
  axios
    .get("/api/users/getacntmt2")
    .then(function (response) {
      // 성공 핸들링

      for (var i = 0; i < 5; i++) {
        data.push({
          id: response.data.success[i].AcntID,
          country: response.data.success[i].AcntID,
          sales: response.data.success[i].AcntID,
          expenses: response.data.success[i].AcntID,
        });
        console.log(response.data.success[i].AcntID);
      }
    })
    .catch(function (error) {
      // 에러 핸들링
      console.log(error);
    })
    .finally(function () {
      // 항상 실행되는 영역
    });

  return data;
}

//top메뉴 목록 가져오기
export function getTopMenuData() {
  var data = [];
  axios
    .post("/api/users/getTopMenuData")
    .then(function (response) {
      // 성공 핸들링
      for (var i = 0; i < response.data.success.length; i++) {
        data.push({
          MenuId: response.data.success[i].MenuId,
          BoardNo: response.data.success[i].BoardNo,
          MenuNo: response.data.success[i].MenuNo,
          MenuName: response.data.success[i].MenuName,
          ItemId: response.data.success[i].ItemId,
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

  return data;
}
