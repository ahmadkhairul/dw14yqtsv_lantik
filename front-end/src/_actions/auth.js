import { AUTH_LOGIN, AUTH_REGISTER } from "../config/constants";
import { API } from "../config/api";

export const postLogin = value => {
  const { email, password } = value;
  return {
    type: AUTH_LOGIN,
    payload: async user => {
      const res = await API.post("/login", {
        email,
        password
      });
      const { data } = res.data;
      if (data.token != null) {
        localStorage.setItem("token", data.token);
      }
      return data;
    }
  };
};

export const postRegister = value => {
  const { username, email, password, address, phone } = value;
  return {
    type: AUTH_REGISTER,
    payload: async () => {
      const res = await API.post("/register", {
        username,
        email,
        password,
        address,
        phone
      });
      const { data } = res.data;
      if (data.token != null) {
        localStorage.setItem("token", data.token);
      }
      return data;
    }
  };
};
