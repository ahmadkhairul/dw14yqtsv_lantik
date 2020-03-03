import axios from "axios";

// Set config defaults when creating the instance
export const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1"
});

export const setAuthToken = token => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const setToken = () => {
  const token = localStorage.getItem("token");
  setAuthToken(token);
};
