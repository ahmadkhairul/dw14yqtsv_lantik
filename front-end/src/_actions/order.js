import {
  GET_ORDERS,
  GET_ORDER,
  DELETE_ORDER,
  UPDATE_ORDER
} from "../config/constants";
import { API, setToken } from "../config/api";

export const getOrder = () => {
  return {
    type: GET_ORDER,
    payload: async () => {
      setToken();
      const res = await API.get("/order");
      const { data } = res.data;
      return data;
    }
  };
};

export const getOrders = () => {
  return {
    type: GET_ORDERS,
    payload: async () => {
      setToken();
      const res = await API.get("/orders");
      const { data } = res.data;
      return data;
    }
  };
};

export const deleteOrder = id => {
  return {
    type: DELETE_ORDER,
    payload: async () => {
      setToken();
      await API.delete("/order/" + id);
      const res = await API.get("/orders");
      const { data } = res.data;
      return data;
    }
  };
};

export const updateOrder = value => {
  const { id, dataStatus } = value;
  return {
    type: UPDATE_ORDER,
    payload: async () => {
      setToken();
      await API.put("/order/" + id, {
        status: dataStatus
      });
      const res = await API.get("/orders");
      const { data } = res.data;
      return data;
    }
  };
};
