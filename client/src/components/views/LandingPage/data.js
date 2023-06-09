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

// export function getData() {
//   var data = [];
//   for (var i = 0; i < 5; i++) {
//     data.push({
//       id: i,
//       country: i + 1,
//       sales: i + 2,
//       expenses: i + 3,
//     });
//   }

//   return data;
// }
