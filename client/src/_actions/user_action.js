import axios from "axios";
import { LOGIN_USER, AUTH_USER } from "./types";

export function loginUser(dataTosubmit) {
  const request = axios.post("/api/users/myjob", dataTosubmit).then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function auth(dataToSubmit) {
  const request = axios.get("api/users/auth", dataToSubmit).then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}
