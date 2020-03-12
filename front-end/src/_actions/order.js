import {
  GET_ORDER_BY_ID,
  GET_ORDERS_BY_USER,
  GET_ORDERS,
  DELETE_ORDER,
  UPDATE_ORDER,
  UPDATE_ORDER_PROOF,
  SAVE_ORDER
} from "../config/constants";
import { API, setToken } from "../config/api";

export const getOrderById = value => {
  const id = value;
  return {
    type: GET_ORDER_BY_ID,
    payload: async () => {
      setToken();
      const res = await API.get("/order/" + id);
      const { data } = res.data;
      return data;
    }
  };
};

export const getOrdersByUser = user => {
  return {
    type: GET_ORDERS_BY_USER,
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

export const updateProofOrder = (file, id) => {
  const formData = new FormData();
  formData.append("image", file);
  return {
    type: UPDATE_ORDER_PROOF,
    payload: async () => {
      setToken();
      const res = await API.post("/order/proof/" + id, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      const { data } = res.data;
      return data;
    }
  };
};

export const postOrder = value => {
  const { id, price, quantity } = value;
  return {
    type: SAVE_ORDER,
    payload: async () => {
      setToken();
      await API.post("/order", {
        ticketId: id,
        qty: quantity,
        price: price
      });
    }
  };
};
