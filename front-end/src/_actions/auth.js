import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_USER,
  AUTH_LOGOUT
} from "../config/constants";
import { API, setToken } from "../config/api";

export const postLogin = value => {
  const { username, password } = value;
  return {
    type: AUTH_LOGIN,
    payload: async user => {
      const res = await API.post("/login", {
        username,
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
  const {
    firstname,
    username,
    email,
    password,
    gender,
    address,
    phone
  } = value;
  return {
    type: AUTH_REGISTER,
    payload: async () => {
      const res = await API.post("/register", {
        name: firstname,
        username,
        email,
        password,
        gender,
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

export const authUser = () => {
  return {
    type: AUTH_USER,
    payload: async () => {
      setToken();
      const res = await API.get("/auth");
      const { data } = res.data;
      return data;
    }
  };
};

export const delUser = () => {
  return {
    type: AUTH_LOGOUT,
    payload: null
  };
};
