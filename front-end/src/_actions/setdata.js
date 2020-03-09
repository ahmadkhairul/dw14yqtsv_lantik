import { SET_ORDER_ID, SET_QUANTITY } from "../config/constants";

export const updateQuantity = value => {
  const quantity = value;
  return {
    type: SET_QUANTITY,
    payload: quantity
  };
};

export const updateOrderId = value => {
  const orderid = value;
  return {
    type: SET_ORDER_ID,
    payload: orderid
  };
};
