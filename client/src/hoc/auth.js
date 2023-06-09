import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (SpecificComponent, option, adminRoute = null) {
  //옵션
  //null = 아무나 출입이 가능한 페이지
  //true = 로그인한 유저만
  //false = 로그인한 유저는 출입 불가능

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        //console.log(response);

        //로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            window.location.replace("/");
          }
        } else {
          //로그인 한 상태
          if (adminRoute && !response.payload.isSuperVisor) {
            window.location.replace("/");
          } else {
            if (option === false) {
              window.location.replace("/");
            }
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
