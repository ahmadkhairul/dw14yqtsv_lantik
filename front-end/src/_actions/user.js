import { GET_USER, LOGOUT_USER } from "../config/constants";
import { API, setToken } from "../config/api";

export const getUser = () => {
  return {
    type: GET_USER,
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
    type: LOGOUT_USER,
    payload: null
  };
};
