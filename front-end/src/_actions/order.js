import {
  GET_ORDER_BY_ID,
  GET_ORDERS_BY_USER,
  GET_ORDERS,
  DELETE_ORDER,
  UPDATE_ORDER
} from "../config/constants";
import { API, setToken } from "../config/api";

export const getOrderById = id => {
  return {
    type: GET_ORDER_BY_ID,
    payload: async () => {
      setToken();
      console.log("Ping");
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

// export const saveOrder = value => {
//   const { id, dataStatus } = value;
//   return {
//     type: UPDATE_ORDER,
//     payload: async () => {
//       setToken();
//       await API.save("/order", {
//         status: dataStatus
//       });
//       const res = await API.get("/orders");
//       const { data } = res.data;
//       return data;
//     }
//   };
// };
