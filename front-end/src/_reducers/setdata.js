import { SET_ORDER_ID, SET_QUANTITY } from "../config/constants";

const initialState = {
  quantity: 1,
  orderid: 1,
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${SET_QUANTITY}`:
      return {
        ...state,
        quantity: action.payload,
        loading: false
      };
    case `${SET_ORDER_ID}`:
      return {
        ...state,
        orderid: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
